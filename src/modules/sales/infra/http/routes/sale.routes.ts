import { Router } from 'express';
import { SaleController } from '../controllers/SaleController';
import { ReceiptDescController } from '../controllers/ReceiptDescController';
import { ensureManager } from '@shared/infra/http/middlewares/ensureManager';

const saleRouter = Router();

const saleController = new SaleController();
const receiptDescController = new ReceiptDescController();

saleRouter.post('/create', saleController.create);

saleRouter.get('/show', saleController.show);

saleRouter.get('/list', saleController.index);

saleRouter.get('/receipt/list', receiptDescController.index);

saleRouter.get('/receipt/show/:id_compra', receiptDescController.show);

saleRouter.delete('/delete', ensureManager, saleController.delete);

saleRouter.patch('/update', ensureManager, saleController.update);

export { saleRouter };
