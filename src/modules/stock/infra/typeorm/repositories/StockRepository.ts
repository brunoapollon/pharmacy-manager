import ICreateStockDTO from '@modules/stock/dtos/ICreateStockDTO';
import IStockRepository from '@modules/stock/repositories/IStockRepository';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { Stock } from '../entities/Stock';

@EntityRepository(Stock)
class StockRepository implements IStockRepository {
  private ormStockRepository: Repository<Stock>;

  constructor() {
    this.ormStockRepository = getRepository(Stock);
  }

  public async findById(id: number): Promise<Stock | undefined> {
    const product = await this.ormStockRepository.findOne(id);

    return product;
  }

  public async create({
    id,
    id_produto,
    quantidade,
  }: ICreateStockDTO): Promise<Stock> {
    const stock = await this.ormStockRepository.create({
      id,
      id_produto,
      quantidade,
    });

    await this.ormStockRepository.save(stock);

    return stock;
  }

  public async deleteStock(id: number): Promise<Boolean> {
    return !!(await this.ormStockRepository.delete(id));
  }

  public async listAllStocks(): Promise<Stock[]> {
    const stocks = await this.ormStockRepository.find();

    return stocks;
  }

  public async save(stock: Stock): Promise<Stock> {
    return await this.ormStockRepository.save(stock);
  }
}

export { StockRepository };
