import { CreateManagerService } from '@modules/managers/services/CreateManagerService';
import { ShowManagerService } from '@modules/managers/services/ShowManagerService';
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

  public async show(request: Request, response: Response): Promise<Response> {
    const { cpf_funcionario } = request.body;

    const showManagerService = new ShowManagerService();

    const manager = await showManagerService.execute({ cpf_funcionario });

    return response.status(200).json(manager);
  }
}

export { ManagerController };
