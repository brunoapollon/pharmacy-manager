import ICreatePharmaceuticalDTO from '@modules/pharmacists/dtos/ICreatePharmaceuticalDTO';
import IPharmaceuticalRepository from '@modules/pharmacists/repositories/IPharmaceuticalRepository';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { Pharmaceutical } from '../entities/Pharmaceutical';

@EntityRepository(Pharmaceutical)
class PharmaceuticalRepository implements IPharmaceuticalRepository {
  private ormPharmaceuticalRepository: Repository<Pharmaceutical>;

  constructor() {
    this.ormPharmaceuticalRepository = getRepository(Pharmaceutical);
  }

  public async findByCPF(
    cpf_funcionario: string,
  ): Promise<Pharmaceutical | undefined> {
    const pharmaceutical = await this.ormPharmaceuticalRepository.findOne({
      where: { cpf_funcionario },
    });

    return pharmaceutical;
  }

  public async findById(
    id_farmaceutico: number,
  ): Promise<Pharmaceutical | undefined> {
    const pharmaceutical = await this.ormPharmaceuticalRepository.findOne(
      id_farmaceutico,
    );

    return pharmaceutical;
  }

  public async create({
    id_farmaceutico,
    cpf_funcionario,
  }: ICreatePharmaceuticalDTO): Promise<Pharmaceutical> {
    const pharmaceutical = await this.ormPharmaceuticalRepository.create({
      id_farmaceutico,
      cpf_funcionario,
    });

    await this.ormPharmaceuticalRepository.save(pharmaceutical);

    return pharmaceutical;
  }

  public async deletePharmaceutical(cpf_funcionario: string): Promise<Boolean> {
    return !!(await this.ormPharmaceuticalRepository.delete({
      cpf_funcionario,
    }));
  }
}

export { PharmaceuticalRepository };
