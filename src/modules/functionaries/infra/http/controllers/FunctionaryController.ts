import { Request, Response } from 'express';
import { CreateUserService } from '@modules/functionaries/service/CreateFunctionaryService';
import { ListAllFunctionariesService } from '@modules/functionaries/service/ListAllFunctionariesService';
import { ShowFunctionaryService } from '@modules/functionaries/service/ShowFunctionaryService';
import { UpdateFunctionaryService } from '@modules/functionaries/service/UpdateFunctionaryService';
import { DeleteFunctionaryService } from '@modules/functionaries/service/DeleteFunctionaryService';

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

  public async show(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.body;

    const showFunctionaryService = new ShowFunctionaryService();

    const functionary = await showFunctionaryService.execute({ cpf });

    return response.status(200).json(functionary);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { cpf, email, endereco, nome, telefone } = request.body;

    if (!cpf) throw new Error('cpf must be provided');

    const updateFunctionaryService = new UpdateFunctionaryService();

    const functionary = await updateFunctionaryService.execute({
      cpf,
      email,
      endereco,
      nome,
      telefone,
    });

    return response.status(201).json(functionary);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { cpf } = request.body;

    if (!cpf) throw new Error('cpf must be provided');

    const deleteFunctionaryService = new DeleteFunctionaryService();

    const deleteWithSucess = await deleteFunctionaryService.execute({
      cpf,
    });

    if (!deleteWithSucess) throw new Error('failed to delete functionary');

    return response.status(201).json({ message: 'delete sucessfully' });
  }
}

export { FunctionaryController };
