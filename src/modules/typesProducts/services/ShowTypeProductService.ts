import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { TypeProducts } from '../infra/typeorm/entities/TypeProduct';
import { TypeProductsRepository } from '../infra/typeorm/repositories/TypeProductsRepository';

interface IRequestShowTypeProductService {
  id: number;
}

class ShowTypeProductService {
  private TypeProducRepository: TypeProductsRepository;

  constructor() {
    this.TypeProducRepository = getCustomRepository(TypeProductsRepository);
  }

  public async execute({
    id,
  }: IRequestShowTypeProductService): Promise<TypeProducts> {
    if (!id) throw new AppError('id must be provided.');

    const typeIDExists = await this.TypeProducRepository.findById(id);

    if (!typeIDExists) throw new AppError('Type product not found', 404);

    return typeIDExists;
  }
}

export { ShowTypeProductService };
