import ICreateFunctionaryDTO from '@modules/functionaries/dtos/ICreateFunctionaryDTO';
import { Functionary } from '@modules/functionaries/infra/typeorm/entities/Functionary';

export default interface IFunctionaryRepository {
  findByCPF(cpf: string): Promise<Functionary | undefined>;
  create(data: ICreateFunctionaryDTO): Promise<Functionary>;
  listAllfunctionary(): Promise<Functionary[]>;
}
