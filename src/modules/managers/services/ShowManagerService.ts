import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Manager } from '../infra/typeorm/entities/Manager';
import { ManagerRepository } from '../infra/typeorm/repositories/ManagerRepository';

interface IRequestShowManagerService {
  cpf_funcionario: string;
}

class ShowManagerService {
  private ormManagerRepository: ManagerRepository;

  constructor() {
    this.ormManagerRepository = getCustomRepository(ManagerRepository);
  }

  public async execute({
    cpf_funcionario,
  }: IRequestShowManagerService): Promise<Manager> {
    const manager = await this.ormManagerRepository.findByCPF(cpf_funcionario);

    if (!manager) throw new AppError('manager does not exists', 404);

    return manager;
  }
}

export { ShowManagerService };
