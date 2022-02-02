import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Stock } from '../infra/typeorm/entities/Stock';
import { StockRepository } from '../infra/typeorm/repositories/StockRepository';

interface IRequestCreateStockService {
  id: number;
  id_produto: number;
  quantidade: number;
}

class CreateStockService {
  private stockRepository: StockRepository;

  constructor() {
    this.stockRepository = getCustomRepository(StockRepository);
  }

  public async execute({
    id,
    id_produto,
    quantidade,
  }: IRequestCreateStockService): Promise<Stock> {
    if (!id || !id_produto || !quantidade)
      throw new AppError('missing data for stock');

    const stockExists = await this.stockRepository.findById(id);

    if (stockExists)
      throw new AppError('there is already an employee with this ID');

    const stock = await this.stockRepository.create({
      id,
      id_produto,
      quantidade,
    });

    return stock;
  }
}

export { CreateStockService };
