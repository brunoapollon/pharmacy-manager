import { ListAllReceiptDescService } from '@modules/sales/services/ListAllReceiptDescService';
import { ShowReceiptDescService } from '@modules/sales/services/ShowReceiptDescService';
import { Request, Response } from 'express';

class ReceiptDescController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listAllReceiptDescService = new ListAllReceiptDescService();

    const receiptDesc = await listAllReceiptDescService.execute();

    return response.status(200).json(receiptDesc);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id_compra } = request.params;

    const parseIdCompra = parseInt(id_compra);

    const showReceiptDescService = new ShowReceiptDescService();

    const receiptDesc = await showReceiptDescService.execute({
      id_compra: parseIdCompra,
    });

    return response.status(200).json(receiptDesc);
  }
}

export { ReceiptDescController };
