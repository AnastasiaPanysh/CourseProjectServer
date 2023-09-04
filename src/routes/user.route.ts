import { Router } from 'express';
import { IRoutes } from '@interfaces/IRoutes';

import UserController from '@controllers/api.controller';

class UserRoute implements IRoutes {
  public path = '/user';

  public router = Router();
  public userController = new UserController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(`${this.path}/registrate`, this.userController.createUser);
    this.router.post(`${this.path}/authenticate`, this.userController.authenticateUser);
  }
}

export default UserRoute;