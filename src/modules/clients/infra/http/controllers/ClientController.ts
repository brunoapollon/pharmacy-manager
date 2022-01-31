import { CreateClientService } from '@modules/clients/services/CreateClientService';
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
}

export { ClientController };
