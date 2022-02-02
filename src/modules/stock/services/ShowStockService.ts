import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Stock } from '../infra/typeorm/entities/Stock';
import { StockRepository } from '../infra/typeorm/repositories/StockRepository';

interface IRequestShowStockService {
  id: number;
}

class ShowStockService {
  private stockRepository: StockRepository;

  constructor() {
    this.stockRepository = getCustomRepository(StockRepository);
  }

  public async execute({ id }: IRequestShowStockService): Promise<Stock> {
    if (!id) throw new AppError('missing data for stock');

    const client = await this.stockRepository.findById(id);

    if (!client) throw new AppError('stock not found', 404);

    return client;
  }
}

export { ShowStockService };
