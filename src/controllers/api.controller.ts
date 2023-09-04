import { Request, Response, NextFunction } from "express";
import { buildResponse } from "@helper/buildResponse";
import { UserService } from "@services/api.service";
import { createToken } from "@helper/jwt";

class UserController {
  private userService = new UserService();

  createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const user = req.body;
      await this.userService.createUser(user);
      buildResponse(res, 201, "success registrate");
    } catch (error) {
      next(error);
    }
  };
  
  authenticateUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const user = req.body;
      const foundUser = await this.userService.authenticateUser(user);

      const tokenData = createToken(foundUser);
      res.cookie("access_token", tokenData.token, {
        httpOnly: false,
        secure: true,
      });

      buildResponse(res, 200, "success authenticate");
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;
