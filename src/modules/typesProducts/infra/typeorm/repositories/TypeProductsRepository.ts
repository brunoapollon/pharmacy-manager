import ICreateTypeProducts from '@modules/typesProducts/dtos/ICreateTypeProducts';
import ITypeProductRepository from '@modules/typesProducts/repositories/ITypeProductRepository';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { TypeProducts } from '../entities/TypeProduct';

@EntityRepository(TypeProducts)
class TypeProductsRepository implements ITypeProductRepository {
  private ormTypeProductRepository: Repository<TypeProducts>;

  constructor() {
    this.ormTypeProductRepository = getRepository(TypeProducts);
  }

  public async create({
    id,
    setor,
  }: ICreateTypeProducts): Promise<TypeProducts> {
    const typeProduct = await this.ormTypeProductRepository.create({
      id,
      setor,
    });

    await this.ormTypeProductRepository.save(typeProduct);

    return typeProduct;
  }

  public async findById(id: number): Promise<TypeProducts | undefined> {
    const typeProduct = await this.ormTypeProductRepository.findOne(id);

    return typeProduct;
  }

  public async listAllTypeProducts(): Promise<TypeProducts[]> {
    const typeProducts = await this.ormTypeProductRepository.find();

    return typeProducts;
  }
}

export { TypeProductsRepository };
