import ICreateSaleDTO from '../dtos/ICreateSaleDTO';
import { Sale } from '../infra/typeorm/entities/Sale';

export default interface ISaleRepository {
  findByID(id: number): Promise<Sale | undefined>;
  create(data: ICreateSaleDTO): Promise<Sale>;
  deleteSale(id: number): Promise<Boolean>;
  listAllSales(): Promise<Sale[]>;
  save(sale: Sale): Promise<Sale>;
}
