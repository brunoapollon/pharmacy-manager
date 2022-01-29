import { getCustomRepository } from 'typeorm';

import { Functionary } from '@modules/functionaries/infra/typeorm/entities/Functionary';
import { FunctionaryRepository } from '@modules/functionaries/infra/typeorm/repositories/FunctionaryRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequestCreateFunctionaryService {
  cpf: string;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
}

class CreateUserService {
  private functionaryRepository: FunctionaryRepository;

  constructor() {
    this.functionaryRepository = getCustomRepository(FunctionaryRepository);
  }

  public async execute({
    cpf,
    email,
    endereco,
    nome,
    telefone,
  }: IRequestCreateFunctionaryService): Promise<Functionary> {
    if (!cpf || !email || !endereco || !nome || !telefone)
      throw new AppError('missing data for functionary');

    const functionaryExists = await this.functionaryRepository.findByCPF(cpf);

    if (functionaryExists)
      throw new AppError('there is already an employee with this cpf');

    const functionary = await this.functionaryRepository.create({
      cpf,
      email,
      endereco,
      nome,
      telefone,
    });

    return functionary;
  }
}

export { CreateUserService };
