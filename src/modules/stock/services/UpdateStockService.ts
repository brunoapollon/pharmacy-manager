import { getCustomRepository } from 'typeorm';

import { Stock } from '../infra/typeorm/entities/Stock';
import { AppError } from '@shared/errors/AppError';
import { StockRepository } from '../infra/typeorm/repositories/StockRepository';

interface IRequestUpdateStockService {
  id: number;
  id_produto: number;
  quantidade: number;
}

class UpdateStockService {
  private ormStockRepository: StockRepository;
  constructor() {
    this.ormStockRepository = getCustomRepository(StockRepository);
  }

  public async execute({
    id,
    id_produto,
    quantidade,
  }: IRequestUpdateStockService): Promise<Stock | undefined> {
    if (!id) throw new AppError('id must be provided');

    const stock = await this.ormStockRepository.findById(id);

    if (!stock) throw new AppError('stock does not exists.', 404);

    stock.id_produto = id_produto;
    stock.quantidade = quantidade;

    await this.ormStockRepository.save(stock);

    const stockUpdated = await this.ormStockRepository.findById(id);

    return stockUpdated;
  }
}

export { UpdateStockService };
