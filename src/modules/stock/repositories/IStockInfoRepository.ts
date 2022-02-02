import { StockInfo } from '../infra/typeorm/entities/StockInfo';

export default interface IStockInfoRepository {
  listStockInfo(): Promise<StockInfo[]>;
}
