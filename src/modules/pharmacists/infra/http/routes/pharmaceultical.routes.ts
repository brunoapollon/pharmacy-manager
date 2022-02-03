import { ensureManager } from '@shared/infra/http/middlewares/ensureManager';
import { Router } from 'express';
import { PharmaceuticalController } from '../controllers/PharmaceuticalController';

const pharmaceuticalRouter = Router();

const pharmaceuticalController = new PharmaceuticalController();

pharmaceuticalRouter.post(
  '/create',
  ensureManager,
  pharmaceuticalController.create,
);

pharmaceuticalRouter.get('/show', pharmaceuticalController.show);

pharmaceuticalRouter.delete('/delete', pharmaceuticalController.delete);

export { pharmaceuticalRouter };
