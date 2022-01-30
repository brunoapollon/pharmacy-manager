import { Router } from 'express';
import { ManagerController } from '../controllers/ManagerController';

const managerRouter = Router();

const managerController = new ManagerController();

managerRouter.post('/create', managerController.create);

managerRouter.get('/show', managerController.show);

managerRouter.delete('/delete', managerController.delete);

export { managerRouter };
