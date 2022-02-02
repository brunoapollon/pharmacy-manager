import ICreateProductDTO from '../dtos/ICreateProductDTO';
import { Product } from '../infra/typeorm/entities/Product';

export default interface IProductRepository {
  findByID(id: number): Promise<Product | undefined>;
  delete(id: number): Promise<Boolean>;
  create(data: ICreateProductDTO): Promise<Product>;
}
