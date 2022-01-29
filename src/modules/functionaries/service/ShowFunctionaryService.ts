import { getCustomRepository } from 'typeorm';

import { Functionary } from '@modules/functionaries/infra/typeorm/entities/Functionary';
import { FunctionaryRepository } from '@modules/functionaries/infra/typeorm/repositories/FunctionaryRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequestShowFunctionaryService {
  cpf: string;
}

class ShowFunctionaryService {
  private ormFunctionaryRepository: FunctionaryRepository;
  constructor() {
    this.ormFunctionaryRepository = getCustomRepository(FunctionaryRepository);
  }

  public async execute({
    cpf,
  }: IRequestShowFunctionaryService): Promise<Functionary> {
    if (!cpf) throw new AppError('cpf must be provided');

    const functionary = await this.ormFunctionaryRepository.findByCPF(cpf);

    if (!functionary) throw new AppError('functionary does not exists.', 404);

    return functionary;
  }
}

export { ShowFunctionaryService };
