import middlewareLibros from '../middleware/middlewareLibros.js';
import { Router } from 'express';
const appLibros = Router();

appLibros.post("/", middlewareLibros, (req, res) => {
    console.log(req.body.guardar)
    res.send("ddd")
});

export default appLibros;