import { getCustomRepository } from 'typeorm';

import { Manager } from '@modules/managers/infra/typeorm/entities/Manager';
import { ManagerRepository } from '@modules/managers/infra/typeorm/repositories/ManagerRepository';
import { AppError } from '@shared/errors/AppError';
import { FunctionaryRepository } from '@modules/functionaries/infra/typeorm/repositories/FunctionaryRepository';

interface IRequestCreateFunctionaryService {
  id_gerente: number;
  cpf_funcionario: string;
}

class CreateManagerService {
  private managerRepository: ManagerRepository;
  private functionaryRepository: FunctionaryRepository;

  constructor() {
    this.managerRepository = getCustomRepository(ManagerRepository);
    this.functionaryRepository = getCustomRepository(FunctionaryRepository);
  }

  public async execute({
    id_gerente,
    cpf_funcionario,
  }: IRequestCreateFunctionaryService): Promise<Manager> {
    if (!cpf_funcionario || !id_gerente)
      throw new AppError('missing data for manager');

    const managerExists = await this.managerRepository.findByCPF(
      cpf_funcionario,
    );

    if (managerExists)
      throw new AppError('there is already an manager with this cpf');

    const functionaryExists = await this.functionaryRepository.findByCPF(
      cpf_funcionario,
    );

    if (!functionaryExists)
      throw new AppError('functionary does not exists', 404);

    const manager = await this.managerRepository.create({
      id_gerente,
      cpf_funcionario,
    });

    return manager;
  }
}

export { CreateManagerService };
