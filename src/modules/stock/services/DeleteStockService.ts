import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { StockRepository } from '../infra/typeorm/repositories/StockRepository';

interface IRequestDeleteStockService {
  id: number;
}

class DeleteStockService {
  private stockRepository: StockRepository;

  constructor() {
    this.stockRepository = getCustomRepository(StockRepository);
  }

  public async execute({ id }: IRequestDeleteStockService): Promise<Boolean> {
    if (!id) throw new AppError('missing data for delete stock');

    const stock = await this.stockRepository.findById(id);

    if (!stock) throw new AppError('stock not found', 404);

    return await this.stockRepository.deleteStock(id);
  }
}

export { DeleteStockService };
