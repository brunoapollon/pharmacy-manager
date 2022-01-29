import { Functionary } from '@entities/Functionary';
import { FunctionaryRepository } from '@repositories/FunctionaryRepository';
import { getCustomRepository } from 'typeorm';

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
    const functionary = await this.ormFunctionaryRepository.findByCPF(cpf);

    if (!functionary) throw new Error('functionary does not exists.');

    return functionary;
  }
}

export { ShowFunctionaryService };
