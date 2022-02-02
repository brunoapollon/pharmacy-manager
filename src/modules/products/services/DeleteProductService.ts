import { StockRepository } from '@modules/stock/infra/typeorm/repositories/StockRepository';
import { TypeProductsRepository } from '@modules/typesProducts/infra/typeorm/repositories/TypeProductsRepository';
import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Product } from '../infra/typeorm/entities/Product';
import { ProductRepository } from '../infra/typeorm/repositories/ProductRepository';

interface IRequestDeleteProductService {
  id: number;
}

class DeleteProductService {
  private productRepository: ProductRepository;
  private stockRepository: StockRepository;

  constructor() {
    this.productRepository = getCustomRepository(ProductRepository);
    this.stockRepository = getCustomRepository(StockRepository);
  }

  public async execute({ id }: IRequestDeleteProductService): Promise<Boolean> {
    if (!id) throw new AppError('id must be provided');

    const productExists = await this.productRepository.findByID(id);

    if (!productExists) throw new AppError('product not found', 404);

    await this.stockRepository.deleteStock(id);

    return await this.productRepository.delete(id);
  }
}

export { DeleteProductService };
