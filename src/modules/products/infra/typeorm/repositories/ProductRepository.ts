import ICreateProductDTO from '@modules/products/dtos/ICreateProductDTO';
import IProductRepository from '@modules/products/repositories/IProductRepository';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { Product } from '../entities/Product';

@EntityRepository(Product)
class ProductRepository implements IProductRepository {
  private ormProductRepository: Repository<Product>;

  constructor() {
    this.ormProductRepository = getRepository(Product);
  }

  public async findByID(id: number): Promise<Product | undefined> {
    const product = await this.ormProductRepository.findOne(id);

    return product;
  }

  public async create({
    id,
    id_tipo,
    nome,
    preco,
  }: ICreateProductDTO): Promise<Product> {
    const product = await this.ormProductRepository.create({
      id,
      id_tipo,
      nome,
      preco,
    });

    await this.ormProductRepository.save(product);

    return product;
  }

  public async delete(id: number): Promise<Boolean> {
    return !!(await this.ormProductRepository.delete(id));
  }

  public async save(product: Product): Promise<void> {
    await this.ormProductRepository.save(product);
  }
}

export { ProductRepository };
