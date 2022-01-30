import { Pharmaceutical } from '@modules/pharmacists/infra/typeorm/entities/Pharmaceutical';
import ICreatePharmaceuticalDTO from '../dtos/ICreatePharmaceuticalDTO';

export default interface IPharmaceuticalRepository {
  findByCPF(cpf_funcionario: string): Promise<Pharmaceutical | undefined>;
  findById(id_farmaceutico: number): Promise<Pharmaceutical | undefined>;
  create(data: ICreatePharmaceuticalDTO): Promise<Pharmaceutical>;
}
