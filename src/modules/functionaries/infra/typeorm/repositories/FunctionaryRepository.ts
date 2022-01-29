import ICreateFunctionaryDTO from '@modules/functionaries/dtos/ICreateFunctionaryDTO';
import { Functionary } from '@modules/functionaries/infra/typeorm/entities/Functionary';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import IFunctionaryRepository from '@modules/functionaries/repositories/IFunctionaryRepository';

@EntityRepository(Functionary)
class FunctionaryRepository implements IFunctionaryRepository {
  private ormFunctionaryRepository: Repository<Functionary>;

  constructor() {
    this.ormFunctionaryRepository = getRepository(Functionary);
  }

  public async findByCPF(cpf: string): Promise<Functionary | undefined> {
    const functionaryFound = await this.ormFunctionaryRepository.findOne({
      where: { cpf },
    });

    return functionaryFound;
  }

  public async create({
    cpf,
    email,
    endereco,
    nome,
    telefone,
  }: ICreateFunctionaryDTO): Promise<Functionary> {
    const createdFunctionary = await this.ormFunctionaryRepository.create({
      cpf,
      email,
      endereco,
      nome,
      telefone,
    });

    await this.ormFunctionaryRepository.save(createdFunctionary);

    return createdFunctionary;
  }

  public async listAllfunctionary(): Promise<Functionary[]> {
    const functionaries = await this.ormFunctionaryRepository.find();

    return functionaries;
  }

  public async saveFunctionary(functionary: Functionary): Promise<Functionary> {
    return await this.ormFunctionaryRepository.save(functionary);
  }
}

export { FunctionaryRepository };
