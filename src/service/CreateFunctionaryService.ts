import { FunctionaryRepository } from '@repositories/FunctionaryRepository';
import { getCustomRepository } from 'typeorm';

interface IRequestCreateUserService {
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
  }: IRequestCreateUserService) {
    const functionaryExists = await this.functionaryRepository.findByCPF(cpf);

    if (functionaryExists)
      throw new Error('there is already an employee with this cpf');

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
