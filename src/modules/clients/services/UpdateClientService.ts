import { getCustomRepository } from 'typeorm';

import { Functionary } from '@modules/functionaries/infra/typeorm/entities/Functionary';
import { AppError } from '@shared/errors/AppError';
import { ClientRepository } from '../infra/typeorm/repositories/ClientRepository';

interface IRequestUpdateClientService {
  cpf: string;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
}

class UpdateClientService {
  private ormClientRepository: ClientRepository;
  constructor() {
    this.ormClientRepository = getCustomRepository(ClientRepository);
  }

  public async execute({
    cpf,
    email,
    endereco,
    nome,
    telefone,
  }: IRequestUpdateClientService): Promise<Functionary | undefined> {
    if (!cpf) throw new AppError('cpf must be provided');

    const client = await this.ormClientRepository.findByCPF(cpf);

    if (!client) throw new AppError('client does not exists.', 404);

    client.email = email;
    client.endereco = endereco;
    client.nome = nome;
    client.telefone = telefone;

    await this.ormClientRepository.save(client);

    const clientUpdated = await this.ormClientRepository.findByCPF(cpf);

    return clientUpdated;
  }
}

export { UpdateClientService };
