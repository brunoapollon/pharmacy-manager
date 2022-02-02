import { getCustomRepository } from 'typeorm';
import { StockInfo } from '../infra/typeorm/entities/StockInfo';
import { StockInfoRepository } from '../infra/typeorm/repositories/StockInfoRepository';

class StockInfoService {
  private stockInfoRepository: StockInfoRepository;

  constructor() {
    this.stockInfoRepository = new StockInfoRepository();
  }

  public async execute(): Promise<StockInfo[]> {
    const stockInfo = await this.stockInfoRepository.listStockInfo();

    return stockInfo;
  }
}

export { StockInfoService };
