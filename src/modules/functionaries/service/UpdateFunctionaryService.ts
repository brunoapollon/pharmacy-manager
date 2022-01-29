import { Functionary } from '@modules/functionaries/infra/typeorm/entities/Functionary';
import { FunctionaryRepository } from '@modules/functionaries/infra/typeorm/repositories/FunctionaryRepository';

import { getCustomRepository } from 'typeorm';

interface IRequestUpdateFunctionaryService {
  cpf: string;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
}

class UpdateFunctionaryService {
  private ormFunctionaryRepository: FunctionaryRepository;
  constructor() {
    this.ormFunctionaryRepository = getCustomRepository(FunctionaryRepository);
  }

  public async execute({
    cpf,
    email,
    endereco,
    nome,
    telefone,
  }: IRequestUpdateFunctionaryService): Promise<Functionary | undefined> {
    const functionary = await this.ormFunctionaryRepository.findByCPF(cpf);

    if (!functionary) throw new Error('functionary does not exists.');

    functionary.email = email;
    functionary.endereco = endereco;
    functionary.nome = nome;
    functionary.telefone = telefone;

    await this.ormFunctionaryRepository.saveFunctionary(functionary);

    const functionaryUpdated = await this.ormFunctionaryRepository.findByCPF(
      cpf,
    );

    return functionaryUpdated;
  }
}

export { UpdateFunctionaryService };
