import { Request, Response } from 'express';
import { CreateUserService } from 'src/service/CreateFunctionaryService';

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
}

export { FunctionaryController };
