import ICreateProductDTO from '../dtos/ICreateProductDTO';
import { Product } from '../infra/typeorm/entities/Product';

export default interface IProductRepository {
  findByID(id: number): Promise<Product | undefined>;
  create(data: ICreateProductDTO): Promise<Product>;
}
