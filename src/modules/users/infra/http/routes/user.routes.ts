import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import RemoveUserController from '../controllers/RemoveUserController';
import UserDetailsController from '../controllers/UserDetailsController';
import UserController from '../controllers/UserController';

const usersRouter = Router();

const userController = new UserController();
const userDetailsController = new UserDetailsController();
const removeUserController = new RemoveUserController();

usersRouter.get('/:popdoc_id', userDetailsController.index);
usersRouter.delete('/:popdoc_id', removeUserController.delete);
usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      popdoc_id: Joi.string().required(),
    },
  }),
  userController.create,
);
export default usersRouter;
