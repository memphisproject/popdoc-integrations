import RemoveUserService from '@modules/users/services/RemoveUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class RemoveUserController {
  public async delete(request: Request, response: Response): Promise<Response> {
    const { popdoc_id } = request.params;
    const removeUser = container.resolve(RemoveUserService);
    await removeUser.execute({ popdoc_id });
    return response.status(200);
  }
}
