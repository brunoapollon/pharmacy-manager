import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { TypeProducts } from '../infra/typeorm/entities/TypeProduct';
import { TypeProductsRepository } from '../infra/typeorm/repositories/TypeProductsRepository';

interface IRequestCreateTypeProductService {
  id: number;
  setor: string;
}

class CreateTypeProductService {
  private TypeProducRepository: TypeProductsRepository;

  constructor() {
    this.TypeProducRepository = getCustomRepository(TypeProductsRepository);
  }

  public async execute({
    id,
    setor,
  }: IRequestCreateTypeProductService): Promise<TypeProducts> {
    if (!id || !setor) throw new AppError('data is missing for type product');

    const typeIDExists = await this.TypeProducRepository.findById(id);

    if (typeIDExists) throw new AppError('Id already exists');

    const typeProduct = await this.TypeProducRepository.create({ id, setor });

    return typeProduct;
  }
}

export { CreateTypeProductService };
