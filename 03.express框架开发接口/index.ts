import express, { Request, Response } from 'express';
const app = express();
import router from './router';
app.use(router);
app.listen(7001);
