import { Router } from 'express';
import { ManagerController } from '../controllers/ManagerController';

const managerRouter = Router();

const managerController = new ManagerController();

managerRouter.post('/create', managerController.create);

export { managerRouter };
