import { Router } from 'express';
import { TypeProductController } from '../controllers/TypeProductController';

const typeProductRouter = Router();

const typeProductController = new TypeProductController();

typeProductRouter.post('/create', typeProductController.create);

typeProductRouter.get('/list', typeProductController.index);

typeProductRouter.patch('/update', typeProductController.update);

typeProductRouter.delete('/delete/:id', typeProductController.delete);

typeProductRouter.get('/show/:id', typeProductController.show);

export { typeProductRouter };
