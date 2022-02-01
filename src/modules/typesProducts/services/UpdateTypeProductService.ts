import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { TypeProducts } from '../infra/typeorm/entities/TypeProduct';
import { TypeProductsRepository } from '../infra/typeorm/repositories/TypeProductsRepository';

interface IRequestUpdateTypeProductService {
  id: number;
  setor: string;
}

class UpdateTypeProductService {
  private TypeProducRepository: TypeProductsRepository;

  constructor() {
    this.TypeProducRepository = getCustomRepository(TypeProductsRepository);
  }

  public async execute({
    id,
    setor,
  }: IRequestUpdateTypeProductService): Promise<TypeProducts> {
    if (!id || !setor) throw new AppError('data is missing for type product');

    const typeIDExists = await this.TypeProducRepository.findById(id);

    if (!typeIDExists) throw new AppError('type product not found', 404);

    typeIDExists.setor = setor;

    await this.TypeProducRepository.save(typeIDExists);

    return typeIDExists;
  }
}

export { UpdateTypeProductService };
