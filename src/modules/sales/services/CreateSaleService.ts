import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Sale } from '../infra/typeorm/entities/Sale';
import { SaleRepository } from '../infra/typeorm/repositories/SaleRepository';

interface IRequestCreateSaleService {
  id: number;
  cpf_cliente: string;
  cpf_funcionario: string;
  id_produto: number;
}

class CreateSaleService {
  private saleRepository: SaleRepository;

  constructor() {
    this.saleRepository = getCustomRepository(SaleRepository);
  }

  public async execute({
    id,
    cpf_cliente,
    cpf_funcionario,
    id_produto,
  }: IRequestCreateSaleService): Promise<Sale> {
    if (!id || !cpf_cliente || !cpf_funcionario || !id_produto)
      throw new AppError('missing data for sale');

    const saleExists = await this.saleRepository.findByID(id);

    if (saleExists)
      throw new AppError('there is already an employee with this cpf');

    const sale = await this.saleRepository.create({
      id,
      cpf_cliente,
      cpf_funcionario,
      id_produto,
    });

    return sale;
  }
}

export { CreateSaleService };
