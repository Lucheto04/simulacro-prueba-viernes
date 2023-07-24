import express from 'express';
import dotenv from 'dotenv';
import appLibros from './routes/libros.js';
dotenv.config();
const app = express();

app.use(express.json());
app.use("/libros", appLibros);

const config = JSON.parse(process.env.MY_SERVER);
app.listen(config, () => {
    console.log(`http://${config.hostname}:${config.port}`)
})