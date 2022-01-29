import { Request, Response } from 'express';
import { CreateUserService } from 'src/service/CreateFunctionaryService';
import { ListAllFunctionariesService } from 'src/service/ListAllFunctionariesService';

class FunctionaryController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { cpf, email, endereco, nome, telefone } = request.body;

    if (!cpf || !email || !endereco || !nome || !telefone)
      throw new Error('missing data for functionary');

    const createUserService = new CreateUserService();

    const functionary = await createUserService.execute({
      cpf,
      email,
      endereco,
      nome,
      telefone,
    });

    return response.status(201).json(functionary);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listAllFunctionaries = new ListAllFunctionariesService();

    const functionaries = await listAllFunctionaries.execute();

    return response.status(200).json(functionaries);
  }
}

export { FunctionaryController };
