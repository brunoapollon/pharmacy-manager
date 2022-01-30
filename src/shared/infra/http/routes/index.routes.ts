import { functionaryRouter } from '@modules/functionaries/infra/http/routes/functionary.routes';
import { managerRouter } from '@modules/managers/infra/http/routes/manager.routes';
import { pharmaceuticalRouter } from '@modules/pharmacists/infra/http/routes/pharmaceultical.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/functionary', functionaryRouter);
routes.use('/manager', managerRouter);
routes.use('/pharmaceutical', pharmaceuticalRouter);

export { routes };
