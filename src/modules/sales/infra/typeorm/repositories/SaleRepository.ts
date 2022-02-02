import ICreateSaleDTO from '@modules/sales/dtos/ICreateSaleDTO';
import ISaleRepository from '@modules/sales/repositories/ISaleRepository';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { Sale } from '../entities/Sale';

@EntityRepository(Sale)
class SaleRepository implements ISaleRepository {
  private ormSaleRepository: Repository<Sale>;

  constructor() {
    this.ormSaleRepository = getRepository(Sale);
  }

  public async findByID(id: number): Promise<Sale | undefined> {
    const sale = await this.ormSaleRepository.findOne(id);

    return sale;
  }

  public async create({
    id,
    cpf_cliente,
    cpf_funcionario,
    id_produto,
  }: ICreateSaleDTO): Promise<Sale> {
    const sale = await this.ormSaleRepository.create({
      id,
      cpf_cliente,
      cpf_funcionario,
      id_produto,
    });

    await this.ormSaleRepository.save(sale);

    return sale;
  }

  public async deleteSale(id: number): Promise<Boolean> {
    return !!(await this.ormSaleRepository.delete(id));
  }

  public async listAllSales(): Promise<Sale[]> {
    const sales = await this.ormSaleRepository.find();

    return sales;
  }

  public async save(sale: Sale): Promise<Sale> {
    return await this.ormSaleRepository.save(sale);
  }
}

export { SaleRepository };
