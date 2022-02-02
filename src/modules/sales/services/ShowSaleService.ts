import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Sale } from '../infra/typeorm/entities/Sale';
import { SaleRepository } from '../infra/typeorm/repositories/SaleRepository';

interface IRequestShowSaleService {
  id: number;
}

class ShowSaleService {
  private saleRepository: SaleRepository;

  constructor() {
    this.saleRepository = getCustomRepository(SaleRepository);
  }

  public async execute({ id }: IRequestShowSaleService): Promise<Sale> {
    if (!id) throw new AppError('missing data for sale');

    const sale = await this.saleRepository.findByID(id);

    if (!sale) throw new AppError('sale not found', 404);

    return sale;
  }
}

export { ShowSaleService };
