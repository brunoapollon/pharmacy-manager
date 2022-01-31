import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ManagerRepository } from '../infra/typeorm/repositories/ManagerRepository';

interface IRequestDeleteManagerService {
  cpf_funcionario: string;
}

class DeleteManagerService {
  private ormManagerRepository: ManagerRepository;

  constructor() {
    this.ormManagerRepository = getCustomRepository(ManagerRepository);
  }

  public async execute({
    cpf_funcionario,
  }: IRequestDeleteManagerService): Promise<Boolean> {
    const manager = await this.ormManagerRepository.findByCPF(cpf_funcionario);

    if (!manager) throw new AppError('manager does not exists', 404);

    return await this.ormManagerRepository.deleteManager(cpf_funcionario);
  }
}

export { DeleteManagerService };
