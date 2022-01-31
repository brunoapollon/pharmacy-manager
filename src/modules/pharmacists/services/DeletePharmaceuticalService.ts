import { AppError } from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Pharmaceutical } from '../infra/typeorm/entities/Pharmaceutical';
import { PharmaceuticalRepository } from '../infra/typeorm/repositories/PharmaceuticalRepository';

interface IRequestDeletePharmaceuticalService {
  cpf_funcionario: string;
}

class DeletePharmaceuticalService {
  private pharmaceuticalRepository: PharmaceuticalRepository;

  constructor() {
    this.pharmaceuticalRepository = getCustomRepository(
      PharmaceuticalRepository,
    );
  }

  public async execute({
    cpf_funcionario,
  }: IRequestDeletePharmaceuticalService): Promise<Boolean> {
    const pharmaceutical = await this.pharmaceuticalRepository.findByCPF(
      cpf_funcionario,
    );

    if (!pharmaceutical)
      throw new AppError('pharmaceutical does not exists', 404);

    return await this.pharmaceuticalRepository.deletePharmaceutical(
      cpf_funcionario,
    );
  }
}

export { DeletePharmaceuticalService };
