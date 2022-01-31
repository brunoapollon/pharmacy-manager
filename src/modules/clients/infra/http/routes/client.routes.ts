import { Router } from 'express';
import { ClientController } from '../controllers/ClientController';

const clientRouter = Router();

const clientController = new ClientController();

clientRouter.post('/create', clientController.create);

export { clientRouter };
