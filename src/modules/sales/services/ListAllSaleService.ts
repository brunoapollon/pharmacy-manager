import { getCustomRepository } from 'typeorm';
import { Sale } from '../infra/typeorm/entities/Sale';
import { SaleRepository } from '../infra/typeorm/repositories/SaleRepository';

class ListAllSalesService {
  private saleRepository: SaleRepository;

  constructor() {
    this.saleRepository = getCustomRepository(SaleRepository);
  }

  public async execute(): Promise<Sale[]> {
    const clients = await this.saleRepository.listAllSales();

    return clients;
  }
}

export { ListAllSalesService };
