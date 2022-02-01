import { CreateClientService } from '@modules/clients/services/CreateClientService';
import { ShowClientService } from '@modules/clients/services/ShowClientService';
import { Request, Response } from 'express';

class ClientController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { cpf, email, endereco, nome, telefone } = request.body;

    const createClientService = new CreateClientService();

    const client = await createClientService.execute({
      cpf,
      email,
      endereco,
      nome,
      telefone,
    });

    return response.status(201).json(client);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.body;

    const showClientService = new ShowClientService();

    const client = await showClientService.execute({ cpf });

    return response.status(200).json(client);
  }
}

export { ClientController };
