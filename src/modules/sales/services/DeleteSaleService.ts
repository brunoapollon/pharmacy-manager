import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { SaleRepository } from '../infra/typeorm/repositories/SaleRepository';

interface IRequestDeleteSaleService {
  id: number;
}

class DeleteSaleService {
  private saleRepository: SaleRepository;

  constructor() {
    this.saleRepository = getCustomRepository(SaleRepository);
  }

  public async execute({ id }: IRequestDeleteSaleService): Promise<Boolean> {
    if (!id) throw new AppError('missing data for delete sale');

    const sale = await this.saleRepository.findByID(id);

    if (!sale) throw new AppError('sale not found', 404);

    return await this.saleRepository.deleteSale(id);
  }
}

export { DeleteSaleService };
