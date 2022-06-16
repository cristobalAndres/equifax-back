import TicketsController from '../../controllers/tickets/tickets.controller';
import TicketsRepository from '../../repositories/tickets.repository';
import { ITickets } from '../../models/tickets';
import { Response } from 'jest-express/lib/response';
import { Request } from 'jest-express/lib/request';


describe('Users HealthCheckController', () => {

  let ticketsRepository = TicketsRepository;
  let req;
  let res;

  beforeEach(async () => {
    jest.resetModules();
    req = new Request();
    res = new Response();
  });

  it('Tickets controller toBeDefined', async () => {
    expect(TicketsController).toBeDefined();
  })

  it('Get Tickets', async () => {
    const dataTicket = {
      id: 1,
      title: 'Titulo 1',
      description: 'Descripcion',
      status: 'OPEN',
      user_id: '1'
    } as unknown as ITickets;

    jest
        .spyOn(ticketsRepository, 'getTickets')
        .mockImplementation(() => Promise.resolve([dataTicket]));

    const test: any = await TicketsController.getTickets(req, res);
    expect(test.body).toBeDefined();
    expect(test.statusCode).toEqual(200);
    expect(test.body).toEqual([
      {
        id: 1,
        title: 'Titulo 1',
        description: 'Descripcion',
        status: 'OPEN',
        user_id: '1'
      }
    ]);
  })

  it('Get Tickets 400', async () => {
    const dataTicket = {
      id: 1,
      title: 'Titulo 1',
      description: 'Descripcion',
      status: 'OPEN',
      user_id: '1'
    } as unknown as ITickets;

    jest
        .spyOn(ticketsRepository, 'getTickets')
        .mockImplementation(() => Promise.reject({
          message: 'error users'
        }));

    const test: any = await TicketsController.getTickets(req, res);
    expect(test.body).toBeDefined();
    expect(test.body).toEqual('error users');
    expect(test.statusCode).toEqual(400);
  })

  it('Create Ticket', async () => {
    const dataTicket = {
      id: 1,
      title: 'Titulo 1',
      description: 'Descripcion',
      status: 'OPEN',
      user_id: '1'
    } as unknown as ITickets;

    jest
        .spyOn(ticketsRepository, 'createTicket')
        .mockImplementation(() => Promise.resolve(dataTicket));

    req.body = {
      title: 'Titulo 1',
      description: 'Descripcion',
      status: 'OPEN',
      user_id: '1'
    }

    const test: any = await TicketsController.createTicket(req, res);
    expect(test.body).toBeDefined();
    expect(test.statusCode).toEqual(200);
    expect(test.body).toEqual(
      {
        id: 1,
        title: 'Titulo 1',
        description: 'Descripcion',
        status: 'OPEN',
        user_id: '1'
      });
  })

  it('Create Tickets 400', async () => {
    jest
        .spyOn(ticketsRepository, 'createTicket')
        .mockImplementation(() => Promise.reject({
          message: 'error users'
        }));

    req.body = {
      title: 'Titulo 1',
      description: 'Descripcion',
      status: 'OPEN',
      user_id: '1'
    }

    const test: any = await TicketsController.createTicket(req, res);
    expect(test.body).toBeDefined();
    expect(test.statusCode).toEqual(400);
    expect(test.body).toEqual('error users');
  })

  it('Update Ticket', async () => {
    const dataTicket = {
      id: 1,
      title: 'Titulo 1',
      description: 'Descripcion',
      status: 'OPEN',
      user_id: '1'
    } as unknown as ITickets;

    jest
        .spyOn(ticketsRepository, 'updateTickets')
        .mockImplementation(() => Promise.resolve([1, [dataTicket]]));

    req.body = {
      title: 'Titulo 1',
      description: 'Descripcion',
      status: 'OPEN',
      user_id: '1'
    }

    const test: any = await TicketsController.updateTicket(req, res);
  })

  it('Update Ticket Error', async () => {

    jest
        .spyOn(ticketsRepository, 'updateTickets')
        .mockImplementation(() => Promise.reject({
          message: 'error users'
        }));

    req.body = {
      title: 'Titulo 1',
      description: 'Descripcion',
      status: 'OPEN',
      user_id: '1'
    }

    const test: any = await TicketsController.updateTicket(req, res);
    expect(test.body).toBeDefined();
    expect(test.statusCode).toEqual(400);
    expect(test.body).toEqual('error users');
  })

  it('Delete Ticket', async () => {
    const dataTicket = {
      id: 1,
      title: 'Titulo 1',
      description: 'Descripcion',
      status: 'OPEN',
      user_id: '1'
    } as unknown as ITickets;

    jest
        .spyOn(ticketsRepository, 'deleteTicket')
        .mockImplementation(() => Promise.resolve(1));

    req.body = {
      title: 'Titulo 1',
      description: 'Descripcion',
      status: 'OPEN',
      user_id: '1'
    }

    await TicketsController.deleteTicket(req, res);
  })

  it('Delete Ticket Error', async () => {

    jest
        .spyOn(ticketsRepository, 'deleteTicket')
        .mockImplementation(() => Promise.reject({
          message: 'error users'
        }));

    req.body = {
      title: 'Titulo 1',
      description: 'Descripcion',
      status: 'OPEN',
      user_id: '1'
    }

    const test: any = await TicketsController.deleteTicket(req, res);
    expect(test.body).toBeDefined();
    expect(test.statusCode).toEqual(400);
    expect(test.body).toEqual('error users');
  })
})