import IStockInfoRepository from '@modules/stock/repositories/IStockInfoRepository';
import { getManager } from 'typeorm';
import { StockInfo } from '../entities/StockInfo';

class StockInfoRepository implements IStockInfoRepository {
  public async listStockInfo(): Promise<StockInfo[]> {
    const managerRepository = getManager();

    const stockInfo = await managerRepository.find(StockInfo);

    return stockInfo;
  }
}

export { StockInfoRepository };
