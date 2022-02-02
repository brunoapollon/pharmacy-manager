import { Router } from 'express';
import { SaleController } from '../controllers/SaleController';
import { ReceiptDescController } from '../controllers/ReceiptDescController';

const saleRouter = Router();

const saleController = new SaleController();
const receiptDescController = new ReceiptDescController();

saleRouter.post('/create', saleController.create);

saleRouter.get('/show', saleController.show);

saleRouter.get('/list', saleController.index);

saleRouter.get('/receipt/list', receiptDescController.index);

saleRouter.get('/receipt/show/:id_compra', receiptDescController.show);

saleRouter.delete('/delete', saleController.delete);

saleRouter.patch('/update', saleController.update);

export { saleRouter };
