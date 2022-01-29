import { Functionary } from '@modules/functionaries/infra/typeorm/entities/Functionary';
import { FunctionaryRepository } from '@modules/functionaries/infra/typeorm/repositories/FunctionaryRepository';
import { getCustomRepository } from 'typeorm';

class ListAllFunctionariesService {
  private functionaryRepository: FunctionaryRepository;

  constructor() {
    this.functionaryRepository = getCustomRepository(FunctionaryRepository);
  }

  public async execute(): Promise<Functionary[]> {
    const functionaries = await this.functionaryRepository.listAllfunctionary();

    return functionaries;
  }
}

export { ListAllFunctionariesService };
