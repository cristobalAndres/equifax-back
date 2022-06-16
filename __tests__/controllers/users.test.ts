import UsersController from '../../controllers/users/users.controller';
import UsersRepository from '../../repositories/users.repository';
import { IUsers } from '../../models/users';
import { Response } from 'jest-express/lib/response';
import { Request } from 'jest-express/lib/request';


describe('Users HealthCheckController', () => {

  let userRepository = UsersRepository;
  let req;
  let res;

  beforeEach(async () => {
    jest.resetModules();
    req = new Request();
    res = new Response();
  });

  it('Users controller toBeDefined', async () => {
    expect(UsersController).toBeDefined();
  })

  it('Get Users', async () => {
    const dataUsers = {
      id: 1,
      name: 'equifax',
      email: 'equifax@gmail.com',
      password: 'asdasd'
    } as IUsers;

    jest
        .spyOn(userRepository, 'getUsers')
        .mockImplementation(() => Promise.resolve([dataUsers]));

    const test: any = await UsersController.getUsers(req, res);
    expect(test.body).toBeDefined();
    expect(test.statusCode).toEqual(200);
    expect(test.body).toEqual([
      {
        id: 1,
        name: 'equifax',
        email: 'equifax@gmail.com',
        password: 'asdasd'
      }
    ]);
  })

  it('Get Users 400', async () => {
    const dataUsers = {
      id: 1,
      name: 'equifax',
      email: 'equifax@gmail.com',
      password: 'asdasd'
    } as IUsers;

    jest
        .spyOn(userRepository, 'getUsers')
        .mockImplementation(() => Promise.reject({
          message: 'error users'
        }));

    const test: any = await UsersController.getUsers(req, res);
    expect(test.body).toBeDefined();
    expect(test.body).toEqual('error users');
    expect(test.statusCode).toEqual(400);
  })

  it('Create Users', async () => {
    const dataUsers = {
      id: 1,
      name: 'equifax',
      email: 'equifax@gmail.com',
      password: 'asdasd'
    } as IUsers;

    jest
        .spyOn(userRepository, 'createuser')
        .mockImplementation(() => Promise.resolve(dataUsers));

    req.body = {
      name: 'equifax',
      email: 'equifax@gmail.com',
      password: '12121212'
    }

    const test: any = await UsersController.createUser(req, res);
    expect(test.body).toBeDefined();
    expect(test.statusCode).toEqual(200);
    expect(test.body).toEqual(
      {
        id: 1,
        name: 'equifax',
        email: 'equifax@gmail.com',
      });
  })

  it('Create Users 400', async () => {
    const dataUsers = {
      id: 1,
      name: 'equifax',
      email: 'equifax@gmail.com',
      password: 'asdasd'
    } as IUsers;

    jest
        .spyOn(userRepository, 'createuser')
        .mockImplementation(() => Promise.reject({
          message: 'error users'
        }));

    req.body = {
      name: 'equifax',
      email: 'equifax@gmail.com',
      password: '12121212'
    }

    const test: any = await UsersController.createUser(req, res);
    expect(test.body).toBeDefined();
    expect(test.statusCode).toEqual(400);
    expect(test.body).toEqual('error users');
  })
});