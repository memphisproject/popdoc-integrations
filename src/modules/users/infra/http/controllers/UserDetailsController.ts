import GetUserDetailsService from '@modules/users/services/GetUserDetails';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class UserDetailsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { popdoc_id } = request.params;
    const getUserDetails = container.resolve(GetUserDetailsService);
    const user = await getUserDetails.execute({ popdoc_id });
    return response.json({ user });
  }
}
