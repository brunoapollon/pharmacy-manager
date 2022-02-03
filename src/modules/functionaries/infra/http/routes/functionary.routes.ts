import { FunctionaryController } from '@modules/functionaries/infra/http/controllers/FunctionaryController';
import { ensureManager } from '@shared/infra/http/middlewares/ensureManager';
import { Router } from 'express';

const functionaryRouter = Router();

const functionaryController = new FunctionaryController();

functionaryRouter.post('/create', ensureManager, functionaryController.create);

functionaryRouter.get('/list', functionaryController.index);
functionaryRouter.get('/show', functionaryController.show);

functionaryRouter.patch('/update', ensureManager, functionaryController.update);

functionaryRouter.delete('/delete', functionaryController.delete);

export { functionaryRouter };
