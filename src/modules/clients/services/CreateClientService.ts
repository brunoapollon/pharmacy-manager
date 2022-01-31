import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Client } from '../infra/typeorm/entities/Client';
import { ClientRepository } from '../infra/typeorm/repositories/ClientRepository';

interface IRequestCreateClientService {
  cpf: string;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
}

class CreateClientService {
  private clientRepository: ClientRepository;

  constructor() {
    this.clientRepository = getCustomRepository(ClientRepository);
  }

  public async execute({
    cpf,
    nome,
    email,
    endereco,
    telefone,
  }: IRequestCreateClientService): Promise<Client> {
    if (!cpf || !email || !endereco || !nome || !telefone)
      throw new AppError('missing data for client');

    const clientExists = await this.clientRepository.findByCPF(cpf);

    if (clientExists)
      throw new AppError('there is already an employee with this cpf');

    const client = await this.clientRepository.create({
      cpf,
      email,
      endereco,
      nome,
      telefone,
    });

    return client;
  }
}

export { CreateClientService };
