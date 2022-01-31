import { Router } from 'express';
import { PharmaceuticalController } from '../controllers/PharmaceuticalController';

const pharmaceuticalRouter = Router();

const pharmaceuticalController = new PharmaceuticalController();

pharmaceuticalRouter.post('/create', pharmaceuticalController.create);

pharmaceuticalRouter.get('/show', pharmaceuticalController.show);

export { pharmaceuticalRouter };
