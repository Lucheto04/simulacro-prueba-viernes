import { Router } from 'express';
const appLibros = Router();

appLibros.get("/", (req, res) => {
    res.send(JSON.stringify(req.body));
})

export default appLibros;