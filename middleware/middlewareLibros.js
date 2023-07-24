import express from 'express';
import 'reflect-metadata';
import { plainToClass } from 'class-transformer';
import { storageLibros } from '../controller/storageLibros.js';
import { validate } from 'class-validator';
const appMiddleware = express();


appMiddleware.use(async (req, res, next) => {
    try {
        let data = plainToClass(storageLibros, req.body, { excludeExtraneousValues: true });
        req.body = data;
        await validate(data);
        next();
    } catch (err) {
        res.status(err.status).json(err)

    }
})

export default appMiddleware;