import { StockInfoService } from '@modules/stock/services/StockInfoService';
import { Request, Response } from 'express';

class StockInfoController {
  public async index(request: Request, response: Response): Promise<Response> {
    const stockInfoService = new StockInfoService();

    const stockInfo = await stockInfoService.execute();

    return response.status(200).json(stockInfo);
  }
}

export { StockInfoController };
