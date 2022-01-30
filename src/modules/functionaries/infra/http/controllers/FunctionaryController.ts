import { Request, Response } from 'express';

import { CreateUserService } from '@modules/functionaries/services/CreateFunctionaryService';
import { ListAllFunctionariesService } from '@modules/functionaries/services/ListAllFunctionariesService';
import { ShowFunctionaryService } from '@modules/functionaries/services/ShowFunctionaryService';
import { UpdateFunctionaryService } from '@modules/functionaries/services/UpdateFunctionaryService';
import { DeleteFunctionaryService } from '@modules/functionaries/services/DeleteFunctionaryService';

class FunctionaryController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { cpf, email, endereco, nome, telefone } = request.body;

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

    const deleteFunctionaryService = new DeleteFunctionaryService();

    const deleteWithSucess = await deleteFunctionaryService.execute({
      cpf,
    });

    return response.status(201).json({ message: 'delete sucessfully' });
  }
}

export { FunctionaryController };
