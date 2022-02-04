import { ensureManager } from '@shared/infra/http/middlewares/ensureManager';
import { Router } from 'express';
import { ManagerController } from '../controllers/ManagerController';

const managerRouter = Router();

const managerController = new ManagerController();

managerRouter.post('/create', ensureManager, managerController.create);

managerRouter.get('/show', ensureManager, managerController.show);

managerRouter.delete('/delete', ensureManager, managerController.delete);

export { managerRouter };
