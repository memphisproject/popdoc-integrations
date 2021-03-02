import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import RemoveUserController from '../controllers/RemoveUserController';
import UserController from '../controllers/UserController';

const usersRouter = Router();

const userController = new UserController();
const removeUserController = new RemoveUserController();

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      popdoc_id: Joi.string().required(),
    },
  }),
  userController.create,
);

usersRouter.delete('/:popdoc_id', removeUserController.delete);

export default usersRouter;
