import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { TypeProducts } from '../infra/typeorm/entities/TypeProduct';
import { TypeProductsRepository } from '../infra/typeorm/repositories/TypeProductsRepository';

class ListAllTypeProductsService {
  private TypeProducRepository: TypeProductsRepository;

  constructor() {
    this.TypeProducRepository = getCustomRepository(TypeProductsRepository);
  }

  public async execute(): Promise<TypeProducts[]> {
    const typeProducts = await this.TypeProducRepository.listAllTypeProducts();

    return typeProducts;
  }
}

export { ListAllTypeProductsService };
