import ICreateStockDTO from '../dtos/ICreateStockDTO';
import { Stock } from '../infra/typeorm/entities/Stock';

export default interface IStockRepository {
  findById(id: number): Promise<Stock | undefined>;
  create(data: ICreateStockDTO): Promise<Stock>;
  deleteStock(id: number): Promise<Boolean>;
  listAllStocks(): Promise<Stock[]>;
  save(stock: Stock): Promise<Stock>;
}
