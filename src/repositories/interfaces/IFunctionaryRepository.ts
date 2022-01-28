import ICreateFunctionaryDTO from '@dtos/ICreateFunctionaryDTO';
import { Functionary } from '@entities/Functionary';

export default interface IFunctionaryRepository {
  findByCPF(cpf: string): Promise<Functionary | undefined>;
  create(data: ICreateFunctionaryDTO): Promise<Functionary>;
}
