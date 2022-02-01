import ICreateClientDTO from '../dtos/ICreateClientDTO';
import { Client } from '../infra/typeorm/entities/Client';

export default interface IClientRepository {
  findByCPF(cpf: string): Promise<Client | undefined>;
  create(data: ICreateClientDTO): Promise<Client>;
  deleteClient(cpf: string): Promise<Boolean>;
}
