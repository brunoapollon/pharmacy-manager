import { getCustomRepository } from 'typeorm';
import { Stock } from '../infra/typeorm/entities/Stock';
import { StockRepository } from '../infra/typeorm/repositories/StockRepository';

class ListAllStocksService {
  private stockRepository: StockRepository;

  constructor() {
    this.stockRepository = getCustomRepository(StockRepository);
  }

  public async execute(): Promise<Stock[]> {
    const stocks = await this.stockRepository.listAllStocks();

    return stocks;
  }
}

export { ListAllStocksService };
