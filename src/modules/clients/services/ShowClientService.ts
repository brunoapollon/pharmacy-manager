import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Client } from '../infra/typeorm/entities/Client';
import { ClientRepository } from '../infra/typeorm/repositories/ClientRepository';

interface IRequestShowClientService {
  cpf: string;
}

class ShowClientService {
  private clientRepository: ClientRepository;

  constructor() {
    this.clientRepository = getCustomRepository(ClientRepository);
  }

  public async execute({ cpf }: IRequestShowClientService): Promise<Client> {
    if (!cpf) throw new AppError('missing data for client');

    const client = await this.clientRepository.findByCPF(cpf);

    if (!client) throw new AppError('client not found', 404);

    return client;
  }
}

export { ShowClientService };
