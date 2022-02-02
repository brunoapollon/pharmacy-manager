import { AppError } from '@shared/errors/AppError';
import { ReceiptDesc } from '../infra/typeorm/entities/ReceiptDesc';
import { ReceiptDescRepository } from '../infra/typeorm/repositories/ReceiptDescRepository';

interface IRequestShowReceiptDescService {
  id_compra: number;
}

class ShowReceiptDescService {
  private receiptDescRepository: ReceiptDescRepository;

  constructor() {
    this.receiptDescRepository = new ReceiptDescRepository();
  }

  public async execute({
    id_compra,
  }: IRequestShowReceiptDescService): Promise<ReceiptDesc> {
    const receiptDesc = await this.receiptDescRepository.findByIdSale(
      id_compra,
    );

    if (!receiptDesc) throw new AppError('Receipt not found', 404);

    return receiptDesc;
  }
}

export { ShowReceiptDescService };
