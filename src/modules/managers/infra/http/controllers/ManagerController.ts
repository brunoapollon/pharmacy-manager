import { CreateManagerService } from '@modules/managers/services/CreateManagerService';
import { Request, Response } from 'express';

class ManagerController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { id_gerente, cpf_funcionario } = request.body;

    const createManagerService = new CreateManagerService();

    const menager = await createManagerService.execute({
      id_gerente,
      cpf_funcionario,
    });

    return response.status(200).json(menager);
  }
}

export { ManagerController };
