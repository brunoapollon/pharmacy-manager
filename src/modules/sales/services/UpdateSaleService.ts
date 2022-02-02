import { getCustomRepository } from 'typeorm';

import { Sale } from '@modules/sales/infra/typeorm/entities/Sale';
import { AppError } from '@shared/errors/AppError';
import { SaleRepository } from '../infra/typeorm/repositories/SaleRepository';

interface IRequestUpdateSaleService {
  id: number;
  cpf_cliente: string;
  cpf_funcionario: string;
  id_produto: number;
}

class UpdateSaleService {
  private ormSaleRepository: SaleRepository;
  constructor() {
    this.ormSaleRepository = getCustomRepository(SaleRepository);
  }

  public async execute({
    id,
    cpf_cliente,
    cpf_funcionario,
    id_produto,
  }: IRequestUpdateSaleService): Promise<Sale | undefined> {
    if (!id) throw new AppError('id must be provided');

    const sale = await this.ormSaleRepository.findByID(id);

    if (!sale) throw new AppError('sale does not exists.', 404);

    sale.cpf_cliente = cpf_cliente;
    sale.cpf_funcionario = cpf_funcionario;
    sale.id_produto = id_produto;

    await this.ormSaleRepository.save(sale);

    const saleUpdated = await this.ormSaleRepository.findByID(id);

    return saleUpdated;
  }
}

export { UpdateSaleService };
