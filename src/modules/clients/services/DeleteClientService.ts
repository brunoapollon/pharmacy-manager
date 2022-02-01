import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Client } from '../infra/typeorm/entities/Client';
import { ClientRepository } from '../infra/typeorm/repositories/ClientRepository';

interface IRequestDeleteClientService {
  cpf: string;
}

class DeleteClientService {
  private clientRepository: ClientRepository;

  constructor() {
    this.clientRepository = getCustomRepository(ClientRepository);
  }

  public async execute({ cpf }: IRequestDeleteClientService): Promise<Boolean> {
    if (!cpf) throw new AppError('missing data for delete client');

    const client = await this.clientRepository.findByCPF(cpf);

    if (!client) throw new AppError('client not found', 404);

    return await this.clientRepository.deleteClient(cpf);
  }
}

export { DeleteClientService };
