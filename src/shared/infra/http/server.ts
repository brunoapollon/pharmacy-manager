import 'reflect-metadata';
import 'express-async-errors';

import express from 'express';
import { routes } from './routes/index.routes';

import '../typeorm';
import { handleErrors } from './middlewares/handleErrors';

const app = express();

app.use(express.json());

app.use(routes);
// app.use(handleErrors);

app.listen(3333, () => {
  console.log('server is running on port 3333 🛠️');
});
