import { CreateTypeProductService } from '@modules/typesProducts/services/CreateTypePropductService';
import { DeleteTypeProductService } from '@modules/typesProducts/services/DeleteTypeProductService';
import { ListAllTypeProductsService } from '@modules/typesProducts/services/ListAllTypeProductsService';
import { Request, Response } from 'express';

class TypeProductController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { id, setor } = request.body;

    const createTypeProductService = new CreateTypeProductService();

    const typeProduct = await createTypeProductService.execute({ id, setor });

    return response.status(201).json(typeProduct);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listAllTypesProducts = new ListAllTypeProductsService();

    const typeProducts = await listAllTypesProducts.execute();

    return response.status(200).json(typeProducts);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTypeProductService = new DeleteTypeProductService();

    const parseId = parseInt(id);
    await deleteTypeProductService.execute({ id: parseId });

    return response.status(201).json({ message: 'Delete successfully' });
  }
}

export { TypeProductController };
