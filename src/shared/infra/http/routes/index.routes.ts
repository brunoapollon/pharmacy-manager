import { clientRouter } from '@modules/clients/infra/http/routes/client.routes';
import { functionaryRouter } from '@modules/functionaries/infra/http/routes/functionary.routes';
import { managerRouter } from '@modules/managers/infra/http/routes/manager.routes';
import { pharmaceuticalRouter } from '@modules/pharmacists/infra/http/routes/pharmaceultical.routes';
import { productRouter } from '@modules/products/infra/http/routes/product.routes';
import { stockRouter } from '@modules/stock/infra/http/routes/stock.routes';
import { typeProductRouter } from '@modules/typesProducts/infra/http/routes/typeProduct.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/functionary', functionaryRouter);
routes.use('/manager', managerRouter);
routes.use('/pharmaceutical', pharmaceuticalRouter);
routes.use('/client', clientRouter);
routes.use('/type_product', typeProductRouter);
routes.use('/stock', stockRouter);
routes.use('/product', productRouter);

export { routes };
