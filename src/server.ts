import "reflect-metadata";
import {createConnection} from "typeorm";
import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoutes from './routes/auth';
import postRoutes from './routes/posts';
import subRoutes from './routes/subs';
import miscRoutes from './routes/misc';
import userRoutes from './routes/users';
import trim from "./middleware/trim";

if (process.env.NODE_ENV === 'development') {
    dotenv.config();
    import('morgan').
        then((morgan) => {
            app.use(morgan.default('dev'));
        })
        .catch(err => 
            console.log(err)
        )
}

const app = express();
const PORT = process.env.PORT;

app.set('trust proxy', 1);

//middleware
app.use(cors({
    credentials: true,
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200
}));
app.use(express.json());
app.use(trim)
app.use(cookieParser());
app.use(express.static('public'));
//routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/subs', subRoutes);
app.use('/api/misc', miscRoutes);
app.use('/api/users', userRoutes);

app.get('/', (request, response) => {
    response.send("hi");
});


app.listen(PORT,async () => {
    console.log(`server is running at http://localhost:${PORT}`);
    try {
        await createConnection();
        console.log("Database connected");
    } catch (err) {
        console.log(err);
    }
});

