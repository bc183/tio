import { Request, Response, Router } from "express";
import multer, { FileFilterCallback } from "multer";
import path from "path";
import fs from 'fs';
import Comment from "../entities/Comment";
import Post from "../entities/Post";
import Sub from "../entities/Sub";
import User from "../entities/User";
import user from "../middleware/user";
import { makeid } from "../utils/helper";

const getUserSubmissions = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneOrFail({
            where: {
                username: req.params.username
            }
        });
        const posts = await Post.find({
            where: {
                user
            },
            relations: ['comments', 'votes', 'sub'],
        });
        const comments = await Comment.find({
            where: {
                user
            },
            relations: ['post'],
        }); 

        if (res.locals.user) {
            posts.forEach(p => p.setUserVote(res.locals.user));
            comments.forEach(c => c.setUserVote(res.locals.user));
        }
        let submissions: any[] = [];
        posts.forEach(p => submissions.push({
            type: 'Post',
            ...p.toJSON(),
        }));
        comments.forEach(c => submissions.push({
            type: 'Comment',
            ...c.toJSON(),
        }));
        submissions.sort((a, b) => {
            if (b.createdAt > a.createdAt) return 1;
            if (b.createdAt < a.createdAt) return -1;
            return 0;
        });
        return res.status(200).json({
            user,
            submissions
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: 'Something went wrong'});
    }
}

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

const uploadProfileImage = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneOrFail({
            where: {
                username: req.params.username
            },
        });
        let oldImageUrn: string = '';
        oldImageUrn = user.imageUrn || '';
        user.imageUrn = req.file.filename;

        await user.save();
        if(oldImageUrn !== '') {
            fs.unlinkSync(`public/images/${oldImageUrn}`);
        }
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: 'Something went wrong'});
    }
}

const router = Router();
router.get('/:username', user, getUserSubmissions);
router.post('/:username/profile', user, upload.single('file'), uploadProfileImage);


export default router;