import bcrypt from "bcrypt";
import {
  registrationUserDB,
  getUserByEmailDB,
} from "../repository/api.repository";
import { iUser } from "../interfaces/interfaces";

async function registrationUser(
  name,
  email,
  password,
  role,
  provaiderName,
  AccesToken,
  ExpirationTime,
  RefreshToken,
): Promise<iUser[]> {
  const foundUser = await getUserByEmailDB(email);
  if (foundUser.length)
    throw new Error("there is already a user with this email.");
  const salt = await bcrypt.genSaltSync(10);
  const hashPwd = await bcrypt.hashSync(password, salt);
  return await registrationUserDB(name, email, hashPwd, role,provaiderName,AccesToken,ExpirationTime,RefreshToken);
}

async function authorizationUser(
  email,
  password
): Promise<iUser[]> {
  const foundUser = await getUserByEmailDB(email);
  if (!foundUser.length)
    throw new Error("user with this email does not exist.");
  console.log(foundUser[0]);

  if (!(await bcrypt.compare(password, foundUser[0].password))) throw new Error(" wrong password");

  return foundUser;
}

export { registrationUser, authorizationUser };
