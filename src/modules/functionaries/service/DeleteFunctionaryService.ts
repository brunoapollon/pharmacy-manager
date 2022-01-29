import { FunctionaryRepository } from '@modules/functionaries/infra/typeorm/repositories/FunctionaryRepository';

import { getCustomRepository } from 'typeorm';

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
    return !!(await this.ormFunctionaryRepository.deleteFunctionary(cpf));
  }
}

export { DeleteFunctionaryService };
