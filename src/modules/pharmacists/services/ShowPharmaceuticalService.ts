import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Pharmaceutical } from '../infra/typeorm/entities/Pharmaceutical';
import { PharmaceuticalRepository } from '../infra/typeorm/repositories/PharmaceuticalRepository';

interface IRequestShowPharmaceuticalService {
  cpf_funcionario: string;
}

class ShowPharmaceuticalService {
  private pharmaceuticalRepository: PharmaceuticalRepository;
  constructor() {
    this.pharmaceuticalRepository = getCustomRepository(
      PharmaceuticalRepository,
    );
  }

  public async execute({
    cpf_funcionario,
  }: IRequestShowPharmaceuticalService): Promise<Pharmaceutical> {
    const pharmaceutical = await this.pharmaceuticalRepository.findByCPF(
      cpf_funcionario,
    );

    if (!pharmaceutical)
      throw new AppError('pharmaceutical does not exists', 404);

    return pharmaceutical;
  }
}

export { ShowPharmaceuticalService };
