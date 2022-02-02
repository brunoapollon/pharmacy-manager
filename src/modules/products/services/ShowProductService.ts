import { TypeProductsRepository } from '@modules/typesProducts/infra/typeorm/repositories/TypeProductsRepository';
import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Product } from '../infra/typeorm/entities/Product';
import { ProductRepository } from '../infra/typeorm/repositories/ProductRepository';

interface IRequestShowProductService {
  id: number;
}

class ShowProductService {
  private typeProducRepository: TypeProductsRepository;
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = getCustomRepository(ProductRepository);
  }

  public async execute({ id }: IRequestShowProductService): Promise<Product> {
    if (!id) throw new AppError('id must be provided.');

    const product = await this.productRepository.findByID(id);

    if (!product) throw new AppError('product not found.');

    return product;
  }
}

export { ShowProductService };
