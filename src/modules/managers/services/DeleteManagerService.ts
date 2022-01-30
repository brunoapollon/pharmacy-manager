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
    const resultdeleteManager = await this.ormManagerRepository.deleteManager(
      cpf_funcionario,
    );

    if (!resultdeleteManager) throw new AppError('Fail to delete manager');

    return resultdeleteManager;
  }
}

export { DeleteManagerService };
