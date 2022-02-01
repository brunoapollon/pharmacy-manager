import { Router } from 'express';
import { ClientController } from '../controllers/ClientController';

const clientRouter = Router();

const clientController = new ClientController();

clientRouter.post('/create', clientController.create);

clientRouter.get('/show', clientController.show);

clientRouter.get('/list', clientController.index);

clientRouter.delete('/delete', clientController.delete);

export { clientRouter };
