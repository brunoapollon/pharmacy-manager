import { ManagerRepository } from '@modules/managers/infra/typeorm/repositories/ManagerRepository';
import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Product } from '../infra/typeorm/entities/Product';
import { ProductRepository } from '../infra/typeorm/repositories/ProductRepository';

interface IRequestUpdateProductService {
  id: number;
  nome: string;
  preco: number;
  id_tipo: number;
}

class UpdateProductService {
  private productRepository: ProductRepository;

  constructor() {
    this.productRepository = getCustomRepository(ProductRepository);
  }

  public async execute({
    id,
    nome,
    preco,
    id_tipo,
  }: IRequestUpdateProductService): Promise<Product> {
    if (!id) throw new AppError('id must be provided.');

    const product = await this.productRepository.findByID(id);

    if (!product) throw new AppError('product not found.', 404);

    product.id_tipo = id_tipo;
    product.nome = nome;
    product.preco = preco;

    await this.productRepository.save(product);

    const productUpdated = await this.productRepository.findByID(id);

    if (!productUpdated) throw new AppError('product not found.', 404);

    return productUpdated;
  }
}

export { UpdateProductService };
