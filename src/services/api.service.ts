import { UserRepository } from '@repositories/api.repository';
import bcrypt from 'bcrypt';

export class UserService {
    private userRepository = new UserRepository();

  async createUser(user){
;
  }

   async authenticateUser(user): Promise<void> {

  }

  async generatePasswordHash(user): Promise<void> {
    const hashPwd = await bcrypt.hashSync(user.pwd, await bcrypt.genSaltSync(10));
    return { ...user, pwd: hashPwd };
  }
}