import { FunctionaryController } from '@controllers/FunctionaryController';
import { Router } from 'express';

const functionaryRouter = Router();

const functionaryController = new FunctionaryController();

functionaryRouter.post('/create', functionaryController.create);

export { functionaryRouter };
