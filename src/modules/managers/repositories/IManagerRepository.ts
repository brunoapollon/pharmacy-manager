import ICreateFunctionaryDTO from '@modules/managers/dtos/ICreateManagerDTO';
import { Manager } from '@modules/managers/infra/typeorm/entities/Manager';

export default interface IFunctionaryRepository {
  findByCPF(cpf_funcionario: string): Promise<Manager | undefined>;
  create(data: ICreateFunctionaryDTO): Promise<Manager>;
  deleteManager(cpf_funcionario: string): Promise<Boolean>;
}
