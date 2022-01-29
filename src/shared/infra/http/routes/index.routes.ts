import { functionaryRouter } from '@modules/functionaries/infra/http/routes/functionary.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/functionary', functionaryRouter);

export { routes };
