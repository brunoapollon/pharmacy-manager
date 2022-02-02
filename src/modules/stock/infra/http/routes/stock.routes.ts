import { Router } from 'express';
import { StockController } from '../controllers/StockController';
import { StockInfoController } from '../controllers/StockInfoController';

const stockRouter = Router();

const stockController = new StockController();
const stockInfoController = new StockInfoController();

stockRouter.post('/create', stockController.create);

stockRouter.get('/show', stockController.show);

stockRouter.get('/list', stockController.index);

stockRouter.delete('/delete', stockController.delete);

stockRouter.patch('/update', stockController.update);

stockRouter.get('/info', stockInfoController.index);

export { stockRouter };
