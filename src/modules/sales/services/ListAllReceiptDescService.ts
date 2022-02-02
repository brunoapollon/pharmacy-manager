import { ReceiptDesc } from '../infra/typeorm/entities/ReceiptDesc';
import { ReceiptDescRepository } from '../infra/typeorm/repositories/ReceiptDescRepository';

class ListAllReceiptDescService {
  private receiptDescRepository: ReceiptDescRepository;

  constructor() {
    this.receiptDescRepository = new ReceiptDescRepository();
  }

  public async execute(): Promise<ReceiptDesc[]> {
    const receiptDescs = await this.receiptDescRepository.listReceiptDesc();

    return receiptDescs;
  }
}

export { ListAllReceiptDescService };
