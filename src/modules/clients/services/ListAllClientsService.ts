import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Client } from '../infra/typeorm/entities/Client';
import { ClientRepository } from '../infra/typeorm/repositories/ClientRepository';

class ListAllClientsService {
  private clientRepository: ClientRepository;

  constructor() {
    this.clientRepository = getCustomRepository(ClientRepository);
  }

  public async execute(): Promise<Client[]> {
    const clients = await this.clientRepository.listAllClients();

    return clients;
  }
}

export { ListAllClientsService };
