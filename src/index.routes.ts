import { functionaryRouter } from '@routes/functionary.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/functionary', functionaryRouter);

export { routes };
