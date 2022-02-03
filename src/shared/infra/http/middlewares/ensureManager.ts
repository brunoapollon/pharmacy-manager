import { ManagerRepository } from '@modules/managers/infra/typeorm/repositories/ManagerRepository';
import { AppError } from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

export async function ensureManager(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { cpf_gerente } = request.body;

  if (!cpf_gerente) throw new AppError('cpf_gerente must be provided');

  const managerRepository = getCustomRepository(ManagerRepository);

  const manager = await managerRepository.findByCPF(cpf_gerente);

  if (!manager) throw new AppError('only manager can be access!');

  next();
}
