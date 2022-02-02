import { Router } from 'express';
import { ClientController } from '../controllers/SaleController';

const saleRouter = Router();

const clientController = new ClientController();

saleRouter.post('/create', clientController.create);

saleRouter.get('/show', clientController.show);

saleRouter.get('/list', clientController.index);

saleRouter.delete('/delete', clientController.delete);

saleRouter.patch('/update', clientController.update);

export { saleRouter };
