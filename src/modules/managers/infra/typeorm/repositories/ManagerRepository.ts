import { EntityRepository, getRepository, Repository } from 'typeorm';
import ICreateManagerDTO from '@modules/managers/dtos/ICreateManagerDTO';
import { Manager } from '@modules/managers/infra/typeorm/entities/Manager';
import IManagerRepository from '@modules/managers/repositories/IManagerRepository';

@EntityRepository(Manager)
class ManagerRepository implements IManagerRepository {
  private ormManagerRepository: Repository<Manager>;

  constructor() {
    this.ormManagerRepository = getRepository(Manager);
  }

  public async findByCPF(
    cpf_funcionario: string,
  ): Promise<Manager | undefined> {
    const functionaryFound = await this.ormManagerRepository.findOne({
      where: { cpf_funcionario },
    });

    return functionaryFound;
  }

  public async create({
    id_gerente,
    cpf_funcionario,
  }: ICreateManagerDTO): Promise<Manager> {
    const managerCreated = await this.ormManagerRepository.create({
      id_gerente,
      cpf_funcionario,
    });

    await this.ormManagerRepository.save(managerCreated);

    return managerCreated;
  }
}

export { ManagerRepository };
