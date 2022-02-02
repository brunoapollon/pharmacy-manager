import { CreateProductService } from '@modules/products/services/CreateProductService';
import { Request, Response } from 'express';

class ProductController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { id, id_tipo, nome, preco } = request.body;

    const createProductService = new CreateProductService();

    const product = await createProductService.execute({
      id,
      id_tipo,
      nome,
      preco,
    });

    return response.status(201).json(product);
  }
}

export { ProductController };
