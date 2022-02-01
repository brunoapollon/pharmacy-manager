import ICreateClientDTO from '@modules/clients/dtos/ICreateClientDTO';
import IClientRepository from '@modules/clients/repositories/IClientRepository';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { Client } from '../entities/Client';

@EntityRepository(Client)
class ClientRepository implements IClientRepository {
  private ormClientRepository: Repository<Client>;

  constructor() {
    this.ormClientRepository = getRepository(Client);
  }

  public async findByCPF(cpf: string): Promise<Client | undefined> {
    const client = await this.ormClientRepository.findOne(cpf);

    return client;
  }

  public async create({
    cpf,
    email,
    endereco,
    nome,
    telefone,
  }: ICreateClientDTO): Promise<Client> {
    const client = await this.ormClientRepository.create({
      cpf,
      email,
      endereco,
      nome,
      telefone,
    });

    await this.ormClientRepository.save(client);

    return client;
  }

  public async deleteClient(cpf: string): Promise<Boolean> {
    return !!(await this.ormClientRepository.delete(cpf));
  }

  public async listAllClients(): Promise<Client[]> {
    const clients = await this.ormClientRepository.find();

    return clients;
  }
}

export { ClientRepository };
