import { TypeProductsRepository } from '@modules/typesProducts/infra/typeorm/repositories/TypeProductsRepository';
import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Product } from '../infra/typeorm/entities/Product';
import { ProductRepository } from '../infra/typeorm/repositories/ProductRepository';

interface IRequestCreateProductService {
  id: number;
  nome: string;
  preco: number;
  id_tipo: number;
}

class CreateProductService {
  private typeProducRepository: TypeProductsRepository;
  private productRepository: ProductRepository;

  constructor() {
    this.typeProducRepository = getCustomRepository(TypeProductsRepository);
    this.productRepository = getCustomRepository(ProductRepository);
  }

  public async execute({
    id,
    id_tipo,
    nome,
    preco,
  }: IRequestCreateProductService): Promise<Product> {
    if (!id || !id_tipo || !nome || !preco)
      throw new AppError('data is missing for type product');

    const idExists = await this.productRepository.findByID(id);

    if (idExists) throw new AppError('id already exists.');

    const typeExists = await this.typeProducRepository.findById(id_tipo);

    if (!typeExists) throw new AppError('id type does not exist.', 404);

    const product = await this.productRepository.create({
      id,
      id_tipo,
      nome,
      preco,
    });

    return product;
  }
}

export { CreateProductService };
