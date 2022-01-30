import { CreatePharmaceuticalService } from '@modules/pharmacists/services/CreatePharmaceuticalService';
import { Request, Response } from 'express';

class PharmaceuticalController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { id_farmaceutico, cpf_funcionario } = request.body;

    const createPharmaceuticalService = new CreatePharmaceuticalService();

    const pharmaceutical = await createPharmaceuticalService.execute({
      id_farmaceutico,
      cpf_funcionario,
    });

    return response.status(201).json(pharmaceutical);
  }
}

export { PharmaceuticalController };
