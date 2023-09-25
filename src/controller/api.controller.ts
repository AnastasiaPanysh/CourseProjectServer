import express, { Request, Response } from "express";
import { registrationUser, authorizationUser } from "../service/api.service";
import { buildResponse } from "../helper/buildResponse";
import { handleError } from "../helper/handleError";

const route = express.Router();

route.post("/reg", async function (req: Request, res: Response) {
  try {
    const user = req.body;
    const resp = await registrationUser(user.name, user.email, user.password, user.role,user.provaiderName, user.AccesToken,user.ExpirationTime,user.RefreshToken);
    buildResponse(res, 200, resp);
  } catch (error: any) {
    handleError(res, 404, error);
  }
});

route.post("/auth", async function (req: Request, res: Response) {
  try {
    const user = req.body;
    const resp= await authorizationUser(user.email, user.password);
    buildResponse(res, 200, resp);
  } catch (error: any) {
    handleError(res, 404, error);
  }
});

export default route;
