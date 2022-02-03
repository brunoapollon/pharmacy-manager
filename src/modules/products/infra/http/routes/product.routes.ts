import { ensureManager } from '@shared/infra/http/middlewares/ensureManager';
import { Router } from 'express';
import { ProductController } from '../controllers/ProductController';

const productRouter = Router();

const productController = new ProductController();

productRouter.post('/create', productController.create);

productRouter.patch('/update', ensureManager, productController.update);

productRouter.get('/show/:id', productController.show);

productRouter.get('/delete/:id', productController.delete);

export { productRouter };
