import ICreateTypeProductsDTO from '../dtos/ICreateTypeProducts';
import { TypeProducts } from '../infra/typeorm/entities/TypeProduct';

export default interface ITypeProductRepository {
  create(data: ICreateTypeProductsDTO): Promise<TypeProducts>;
  save(typeProduct: TypeProducts): Promise<void>;
  findById(id: number): Promise<TypeProducts | undefined>;
  listAllTypeProducts(): Promise<TypeProducts[]>;
  deleteProduct(id: number): Promise<Boolean>;
}
