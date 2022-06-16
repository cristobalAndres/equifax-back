import { Users, IUsers } from '../models';

export default class UsersRepository {
  static async getUsers() {
    try {
      const users = await Users.findAll({
        attributes: ['id', 'name', 'email']
      });
      const data = users as IUsers[]
      return data;
    } catch (error) {
      console.log(`ERROR - ${error}`)
      throw new Error(error);
    }
  }

  static async finUsers(email: string) {
    try {
      const users = await Users.findOne({
        where: {
          email,
        }
      });
      const data = users as IUsers
      return data;
    } catch (error) {
      console.log(`ERROR - ${error}`)
      throw new Error(error);
    }
  }

  static async createuser(users: IUsers) {
    try {
      const create = await Users.create(users);
      return create;
    } catch (error) {
      console.log(`ERROR - ${error}`)
      throw new Error(error);
    }
  }
}
