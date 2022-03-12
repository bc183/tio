import { Request, Response, Router, NextFunction } from 'express';
import multer, { FileFilterCallback } from 'multer';
import path from 'path';
import fs from 'fs';
import User from '../entities/User';
import auth from '../middleware/auth';
import { getRepository } from 'typeorm'
import { isEmpty } from 'class-validator'
import Sub from '../entities/Sub';
import user from '../middleware/user';
import Post from '../entities/Post';
import { makeid } from '../utils/helper';

const createSub = async (req: Request, res: Response) => {
    const { name, title, description, subOfCommunity, isCodingCommunity  } = req.body;

    const user: User = res.locals.user;

    try {
        let errors: any = {};
        if (isEmpty(name)) {
            errors.name = "Name must not be empty";
        }
        if (isEmpty(title)) {
            errors.title = "Title must not be empty";
        }

        const sub = await getRepository(Sub).createQueryBuilder('sub')
                    .where('lower(sub.name) = :name', { name: name.toLowerCase() })
                    .getOne()
        // if (!sub && subOfCommunity !== null) {
        //     errors.name = 'Sub not found';
        // }
        
        if (sub) {
            errors.name = 'Sub exists already';
        }

        if(Object.keys(errors).length > 0) {
            throw errors;
        }


    } catch (error) {
        return res.status(400).json(error);
    }

    try {
        const sub = new Sub({
            name, description, title, user, subOfCommunity, isCodingCommunity
        });

        await sub.save();
        return res.json(sub);
    } catch (error) {
        console.log(error);
        return res.status(500).json('Something went wrong');

    }

}

const getSub = async (req: Request, res: Response) => {
    const name = req.params.name;
    try {
        const sub = await Sub.findOneOrFail({ name });
        const posts = await Post.find({
            where: {
                sub
            },
            order: {createdAt: 'DESC'}, 
            relations: ['comments', 'votes']
        }) 
        sub.posts = posts;
        const subsOfCommunities = await Sub.find({
            where: {
                subOfCommunity: name,
            },
            order: {createdAt: 'DESC'},
            // relations: ['comments', 'votes']
        });
        sub.subCommunities = subsOfCommunities;
        if(res.locals.user) {
            sub.posts.forEach(p => p.setUserVote(res.locals.user));
        }
        return res.json(sub);
    } catch (error) {
        console.log(error);
        return res.status(404).send({sub:'Sub not found'})
    }

}

const ownSub = async (req:Request, res:Response, next: NextFunction) => {
    const user: User = res.locals.user;
    
    try {
        const sub = await Sub.findOneOrFail({ where: {
            name: req.params.name
        } });
        if (sub.username !== user.username) {
            return res.status(403).json({ error: "You don't own this sub" });
        } 
        res.locals.sub = sub;
        return next();
    } catch (error) {
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

const seacrhSubs = async (req: Request, res: Response) => {
    try {
        const name = req.params.name;
        if (isEmpty(name)) {
            return res.status(400).json({ error: 'Name must not be empty' })
        }

        const subs = await getRepository(Sub)
                    .createQueryBuilder()
                    .where('LOWER(name) LIKE :name', {name: `${name.toLowerCase().trim()}%` })
                    .getMany()
        //console.log(subs);
        return res.json(subs);
    } catch (error) {
        return res.status(500).json({ error: 'Something went wrong' });
    }
}

const uploadSubImage = async (req: Request, res: Response) => {
    const sub: Sub = res.locals.sub;
    try {
        const type = req.body.type;
        if(type !== 'image' && type !== 'banner') {
            fs.unlinkSync(req.file.path);
            return res.status(400).json({error: 'Invalid type'});
        }
        let oldImageUrn: string = '';
        if(type === 'image') {
            oldImageUrn = sub.imageUrn || '';
            sub.imageUrn = req.file.filename;
        } else if(type === 'banner') {
            oldImageUrn = sub.bannerUrn || '';
            sub.bannerUrn = req.file.filename;
        }

        await sub.save();
        if(oldImageUrn !== '') {
            fs.unlinkSync(`public/images/${oldImageUrn}`);
        }
        res.status(200).json(sub);
    } catch (error) {
        console.log(error);
        return res.status(500).json({error: 'Something went wrong'});
    }
}

const router = Router();
router.post('/', user, auth, createSub);
router.get('/:name', user, getSub);
router.get('/search/:name', seacrhSubs);
router.post('/:name/image', user, auth, ownSub, upload.single('file'),uploadSubImage)
export default router;