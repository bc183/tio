import "reflect-metadata";
import {createConnection} from "typeorm";
import dotenv from 'dotenv';
import express, { response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRoutes from './routes/auth';
import postRoutes from './routes/posts';
import subRoutes from './routes/subs';
import miscRoutes from './routes/misc';
import userRoutes from './routes/users';
import trim from "./middleware/trim";

dotenv.config();

const app = express();
const PORT = process.env.PORT;
//middleware
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
    import('morgan').
        then((morgan) => {
            app.use(morgan.default('dev'));
        })
        .catch(err => 
            console.log(err)
        )
}
app.use(trim)
app.use(cookieParser());
app.use(cors({
    credentials: true,
}));
app.use(express.static('public'));
//routes
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/subs', subRoutes);
app.use('/api/misc', miscRoutes);
app.use('/api/users', userRoutes);

app.get('/', (request, response) => {
    return response.send("<h1> 200 OK <h1>");
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

