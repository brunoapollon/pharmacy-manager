import { Router } from 'express';
import { TypeProductController } from '../controllers/TypeProductController';

const typeProductRouter = Router();

const typeProductController = new TypeProductController();

typeProductRouter.post('/create', typeProductController.create);

typeProductRouter.get('/list', typeProductController.index);

export { typeProductRouter };
