import { FunctionaryRepository } from '@repositories/FunctionaryRepository';
import { getCustomRepository } from 'typeorm';

class ListAllFunctionariesService {
  private functionaryRepository: FunctionaryRepository;

  constructor() {
    this.functionaryRepository = getCustomRepository(FunctionaryRepository);
  }

  public async execute() {
    const functionaries = await this.functionaryRepository.listAllfunctionary();

    return functionaries;
  }
}

export { ListAllFunctionariesService };
