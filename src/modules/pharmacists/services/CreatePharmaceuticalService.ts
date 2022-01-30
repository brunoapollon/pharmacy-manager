import { getCustomRepository } from 'typeorm';

import { AppError } from '@shared/errors/AppError';
import { FunctionaryRepository } from '@modules/functionaries/infra/typeorm/repositories/FunctionaryRepository';
import { Pharmaceutical } from '../infra/typeorm/entities/Pharmaceutical';
import { PharmaceuticalRepository } from '../infra/typeorm/repositories/PharmaceuticalRepository';

interface IRequestCreateFunctionaryService {
  id_farmaceutico: number;
  cpf_funcionario: string;
}

class CreatePharmaceuticalService {
  private pharmaceuticalRepository: PharmaceuticalRepository;
  private functionaryRepository: FunctionaryRepository;

  constructor() {
    this.pharmaceuticalRepository = getCustomRepository(
      PharmaceuticalRepository,
    );
    this.functionaryRepository = getCustomRepository(FunctionaryRepository);
  }

  public async execute({
    id_farmaceutico,
    cpf_funcionario,
  }: IRequestCreateFunctionaryService): Promise<Pharmaceutical> {
    if (!cpf_funcionario || !id_farmaceutico)
      throw new AppError('missing data for pharmaceutical');

    const pharmaceuticalExistsByCPF =
      await this.pharmaceuticalRepository.findByCPF(cpf_funcionario);

    if (pharmaceuticalExistsByCPF)
      throw new AppError('there is already an pharmaceutical with this cpf');

    const pharmaceuticalExistsByID =
      await this.pharmaceuticalRepository.findById(id_farmaceutico);

    if (pharmaceuticalExistsByID)
      throw new AppError('there is already an pharmaceutical with this id');

    const functionaryExists = await this.functionaryRepository.findByCPF(
      cpf_funcionario,
    );

    if (!functionaryExists)
      throw new AppError('functionary does not exists', 404);

    const pharmaceutical = await this.pharmaceuticalRepository.create({
      id_farmaceutico,
      cpf_funcionario,
    });

    return pharmaceutical;
  }
}

export { CreatePharmaceuticalService };
