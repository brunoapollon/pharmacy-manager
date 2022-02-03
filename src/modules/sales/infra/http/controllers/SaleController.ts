import { CreateSaleService } from '@modules/sales/services/CreateSaleService';
import { DeleteSaleService } from '@modules/sales/services/DeleteSaleService';
import { ListAllSalesService } from '@modules/sales/services/ListAllSaleService';
import { ShowSaleService } from '@modules/sales/services/ShowSaleService';
import { UpdateSaleService } from '@modules/sales/services/UpdateSaleService';
import { Request, Response } from 'express';

class SaleController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { id, cpf_cliente, cpf_funcionario, id_produto, valor_recebido } =
      request.body;

    const createSaleService = new CreateSaleService();

    const sale = await createSaleService.execute({
      id,
      cpf_cliente,
      cpf_funcionario,
      id_produto,
      valor_recebido,
    });

    return response.status(201).json(sale);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const showSaleService = new ShowSaleService();

    const sale = await showSaleService.execute({ id });

    return response.status(200).json(sale);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const deleteSaleService = new DeleteSaleService();

    await deleteSaleService.execute({ id });

    return response.status(200).json({ message: 'sale deleted successfully' });
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listAllSalesService = new ListAllSalesService();

    const sales = await listAllSalesService.execute();

    return response.status(200).json(sales);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id, cpf_cliente, cpf_funcionario, id_produto } = request.body;

    const updateClientService = new UpdateSaleService();

    const client = await updateClientService.execute({
      id,
      cpf_cliente,
      cpf_funcionario,
      id_produto,
    });

    return response.status(201).json(client);
  }
}

export { SaleController };
