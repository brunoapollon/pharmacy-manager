import { CreateClientService } from '@modules/clients/services/CreateClientService';
import { DeleteClientService } from '@modules/clients/services/DeleteClientService';
import { ListAllClientsService } from '@modules/clients/services/ListAllClientsService';
import { ShowClientService } from '@modules/clients/services/ShowClientService';
import { UpdateClientService } from '@modules/clients/services/UpdateClientService';
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

  public async delete(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.body;

    const deleteClientService = new DeleteClientService();

    await deleteClientService.execute({ cpf });

    return response
      .status(200)
      .json({ message: 'client deleted successfully' });
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listAllClientsService = new ListAllClientsService();

    const clients = await listAllClientsService.execute();

    return response.status(200).json(clients);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { cpf, email, endereco, nome, telefone } = request.body;

    const updateClientService = new UpdateClientService();

    const client = await updateClientService.execute({
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
