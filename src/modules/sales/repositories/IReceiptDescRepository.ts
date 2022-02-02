import { ReceiptDesc } from '../infra/typeorm/entities/ReceiptDesc';

export default interface IReceiptDescRepository {
  listReceiptDesc(): Promise<ReceiptDesc[]>;
  findByIdSale(id_compra: number): Promise<ReceiptDesc | undefined>;
}
