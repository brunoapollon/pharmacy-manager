import { CreateStockService } from '@modules/stock/services/CreateStockService';
import { DeleteStockService } from '@modules/stock/services/DeleteStockService';
import { ListAllStocksService } from '@modules/stock/services/ListAllStocksService';
import { ShowStockService } from '@modules/stock/services/ShowStockService';
import { UpdateStockService } from '@modules/stock/services/UpdateStockService';
import { Request, Response } from 'express';

class StockController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { id, id_produto, quantidade } = request.body;

    const createStockService = new CreateStockService();

    const stock = await createStockService.execute({
      id,
      id_produto,
      quantidade,
    });

    return response.status(201).json(stock);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const showStocktService = new ShowStockService();

    const stock = await showStocktService.execute({ id });

    return response.status(200).json(stock);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const deleteStockService = new DeleteStockService();

    await deleteStockService.execute({ id });

    return response.status(200).json({ message: 'stock deleted successfully' });
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listAllStocksService = new ListAllStocksService();

    const stocks = await listAllStocksService.execute();

    return response.status(200).json(stocks);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id, id_produto, quantidade } = request.body;

    const updateStockService = new UpdateStockService();

    const stock = await updateStockService.execute({
      id,
      id_produto,
      quantidade,
    });

    return response.status(201).json(stock);
  }
}

export { StockController };
