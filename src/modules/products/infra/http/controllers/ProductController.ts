import { CreateProductService } from '@modules/products/services/CreateProductService';
import { ShowProductService } from '@modules/products/services/ShowProductService';
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

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const idParse = parseInt(id);

    const showProductService = new ShowProductService();

    const product = await showProductService.execute({ id: idParse });

    return response.status(200).json(product);
  }
}

export { ProductController };
