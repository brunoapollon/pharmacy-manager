import { Router } from 'express';
import { SaleController } from '../controllers/SaleController';

const saleRouter = Router();

const saleController = new SaleController();

saleRouter.post('/create', saleController.create);

saleRouter.get('/show', saleController.show);

saleRouter.get('/list', saleController.index);

saleRouter.delete('/delete', saleController.delete);

saleRouter.patch('/update', saleController.update);

export { saleRouter };
