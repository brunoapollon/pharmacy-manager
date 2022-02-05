import { ProductRepository } from '@modules/products/infra/typeorm/repositories/ProductRepository';
import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { SaleRepository } from '../infra/typeorm/repositories/SaleRepository';

interface IRequestCreateSaleService {
  id: number;
  cpf_cliente: string;
  cpf_funcionario: string;
  id_produto: number;
  valor_recebido: number;
}

interface SaleWithCashBack {
  id: number;
  cpf_cliente: string;
  cpf_funcionario: string;
  id_produto: number;
  troco: number;
}

class CreateSaleService {
  private saleRepository: SaleRepository;
  private productRepository: ProductRepository;

  constructor() {
    this.saleRepository = getCustomRepository(SaleRepository);
    this.productRepository = getCustomRepository(ProductRepository);
  }

  public async execute({
    id,
    cpf_cliente,
    cpf_funcionario,
    id_produto,
    valor_recebido,
  }: IRequestCreateSaleService): Promise<SaleWithCashBack> {
    if (
      !id ||
      !cpf_cliente ||
      !cpf_funcionario ||
      !id_produto ||
      !valor_recebido
    )
      throw new AppError('missing data for sale');

    if (cpf_cliente === cpf_funcionario)
      throw new AppError('a functionary cannot self-service.');

    const saleExists = await this.saleRepository.findByID(id);

    if (saleExists) throw new AppError('there is already an sale with this id');

    const product = await this.productRepository.findByID(id_produto);

    if (!product) throw new AppError('product not found', 404);

    if (valor_recebido < product.preco)
      throw new AppError('Insufficient value for purchase');

    const sale = await this.saleRepository.create({
      id,
      cpf_cliente,
      cpf_funcionario,
      id_produto,
    });

    const saleWithCashBack: SaleWithCashBack = {
      id: sale.id,
      cpf_cliente: sale.cpf_cliente,
      cpf_funcionario: sale.cpf_funcionario,
      id_produto: sale.id_produto,
      troco:
        valor_recebido > product.preco ? valor_recebido - product.preco : 0,
    };

    return saleWithCashBack;
  }
}

export { CreateSaleService };
