import { getCustomRepository } from 'typeorm';

import { FunctionaryRepository } from '@modules/functionaries/infra/typeorm/repositories/FunctionaryRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequestDeleteFunctionaryService {
  cpf: string;
}

class DeleteFunctionaryService {
  private ormFunctionaryRepository: FunctionaryRepository;
  constructor() {
    this.ormFunctionaryRepository = getCustomRepository(FunctionaryRepository);
  }

  public async execute({
    cpf,
  }: IRequestDeleteFunctionaryService): Promise<Boolean> {
    if (!cpf) throw new AppError('cpf must be provided');

    const deleteWithSucess =
      !!(await this.ormFunctionaryRepository.deleteFunctionary(cpf));

    if (!deleteWithSucess) throw new AppError('failed to delete functionary');

    return deleteWithSucess;
  }
}

export { DeleteFunctionaryService };
