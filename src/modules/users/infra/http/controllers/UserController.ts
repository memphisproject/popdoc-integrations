import CreateUserService from '@modules/users/services/CreateUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class AuthController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { popdoc_id } = request.body;
    const createUser = container.resolve(CreateUserService);
    const user = await createUser.execute({ popdoc_id });
    return response.json({ user });
  }
}
