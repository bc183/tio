import { Response, Router } from 'express';
import { Request } from 'express';
import multer, { FileFilterCallback } from 'multer';
import path from 'path';
import Comment from '../entities/Comment';
import Post from '../entities/Post';
import Sub from '../entities/Sub';
import auth from '../middleware/auth';
import user from '../middleware/user';
import { makeid } from '../utils/helper';

const upload = multer({
    storage: multer.diskStorage({
        destination: 'public/images',
        filename: (req, file, callback) => {
            const name = makeid(15);
            callback(null, name + path.extname(file.originalname));
        }
    }),
    fileFilter: (req, file, callback: FileFilterCallback) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            callback(null, true);
        } else {
            callback(new Error('not an image'));
        }
    }
});

// const uploadProfileImage = async (req: Request, res: Response) => {
//     try {
//         const user = await .findOneOrFail({
//             where: {
//                 username: req.params.username
//             },
//         });
//         let oldImageUrn: string = '';
//         oldImageUrn = user.imageUrn || '';
//         user.imageUrn = req.file.filename;

//         await user.save();
//         if(oldImageUrn !== '') {
//             fs.unlinkSync(`public/images/${oldImageUrn}`);
//         }
//         res.status(200).json(user);
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({error: 'Something went wrong'});
//     }
// }


const createPost = async (req: Request, res: Response) => {
    const {title, body, sub, isCode, language} = req.body;

    const user = res.locals.user;

    if(title.trim() === "") {
        return res.status(400).json({title: 'Title must not be empty'});
    }

    try {

        const subRecord = await Sub.findOneOrFail({ name: sub })
        const post = new Post({
            title,
            body,
            user,
            imageUrn: req.file?.filename,
            sub: subRecord,
            isCode,
            language
        });
        await post.save();

        return res.json(post)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong!' })
    }
}

const getPosts = async (req: Request, res: Response) => {
    const currentPage: number = (req.query.page || 0) as number;
    const postsPerPage: number = (req.query.count || 8) as number;

    try {
        const posts = await Post.find({
            order: {
                createdAt: 'DESC'
            },
            relations: ['comments', 'votes', 'sub'],
            skip: currentPage * postsPerPage,
            take: postsPerPage
        })

        if(res.locals.user) {
            posts.forEach(post => post.setUserVote(res.locals.user));
        }


        res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Something went wrong' });
    }
}

const getPost = async (req: Request, res: Response) => {
    console.log("hi");
    const { identifier, slug } = req.params;
    console.log(identifier);
    try {
        const post = await Post.findOneOrFail({
            identifier, slug,
        }, {
            relations: ['sub', 'votes', 'comments']
        });

        if (res.locals.user) {
            post.setUserVote(res.locals.user);
        }

        res.status(200).json(post);
    } catch (error) {
        //console.log(error);
        return res.status(404).json({ error: 'post not found' });
    }
}

const commentOnPost = async (req: Request, res: Response) => {
    const { identifier, slug } = req.params;
    const body = req.body.body;


    try {
        const post = await Post.findOneOrFail({ identifier, slug })
        const comment = new Comment({
            body,
            user: res.locals.user,
            post
        });
        await comment.save();
        return res.json(comment);
    } catch (error) {
        console.log(error);
        return res.status(404).json({ error: 'Post not found' })
    }
}

const getPostComments = async (req: Request, res: Response) => {
    const { identifier, slug } = req.params;
    try {
        const post = await Post.findOneOrFail({ identifier, slug });
        const comments = await Comment.find({
            where: {
                post
            },
            order: {
                createdAt: 'DESC'
            },
            relations: ['votes']
        });

        if (res.locals.user) {
            comments.forEach(comment => {
                comment.setUserVote(res.locals.user);
            });
        }

        return res.json(comments)
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error:'Something went wrong' });
    }
}



const router = Router();
router.post('/', user, auth, upload.single('file'), createPost);
router.get('/', user, getPosts);
router.get('/:identifier/:slug', user, getPost);
router.post('/:identifier/:slug/comments', user, auth, commentOnPost);
router.get('/:identifier/:slug/comments', user, getPostComments);




export default router;
