import { Router } from 'express';
import { StockController } from '../controllers/StockController';

const stockRouter = Router();

const stockController = new StockController();

stockRouter.post('/create', stockController.create);

stockRouter.get('/show', stockController.show);

stockRouter.get('/list', stockController.index);

stockRouter.delete('/delete', stockController.delete);

stockRouter.patch('/update', stockController.update);

export { stockRouter };
