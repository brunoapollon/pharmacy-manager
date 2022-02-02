import IReceiptDescRepository from '@modules/sales/repositories/IReceiptDescRepository';
import { getManager } from 'typeorm';
import { ReceiptDesc } from '../entities/ReceiptDesc';

class ReceiptDescRepository implements IReceiptDescRepository {
  public async listReceiptDesc(): Promise<ReceiptDesc[]> {
    const ormManagerRepository = getManager();

    const ReceiptDescs = await ormManagerRepository.find(ReceiptDesc);

    return ReceiptDescs;
  }

  public async findByIdSale(
    id_compra: number,
  ): Promise<ReceiptDesc | undefined> {
    const ormManagerRepository = getManager();

    const receiptDesc = await ormManagerRepository.findOne(ReceiptDesc, {
      id_compra,
    });

    return receiptDesc;
  }
}

export { ReceiptDescRepository };
