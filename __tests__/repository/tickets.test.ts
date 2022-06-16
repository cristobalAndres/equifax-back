import TicketsRepository from '../../repositories/tickets.repository';
import TicketsModel from '../../models/tickets';
import { ITickets } from '../../models/tickets';
import { Response } from 'jest-express/lib/response';
import { Request } from 'jest-express/lib/request';


describe('Tickets Repository', () => {

  let ticketsRepository = TicketsRepository;
  let req;
  let res;

  beforeEach(async () => {
    jest.resetModules();
    req = new Request();
    res = new Response();
  });

    it('getTickets toBeDefined', async () => {
      expect(ticketsRepository).toBeDefined();
    })

  it('getTickets', async () => {
    const dataUsers = {
      id: 1,
      title: 'Titulo 1',
      description: 'Descripcion',
      status: 'OPEN',
      user_id: '1'
    } as unknown as ITickets;

    const mockResponse: any = {
      dataValues: {
        data: dataUsers
      },
      update: jest.fn().mockImplementationOnce(() => Promise.resolve(mockResponse))
    };

    jest
      .spyOn(TicketsModel, 'findAll')
      .mockImplementation(() => Promise.resolve([dataUsers]));

    const test: any = await ticketsRepository.getTickets();

    expect(test).toEqual([
      {
        id: 1,
        title: 'Titulo 1',
        description: 'Descripcion',
        status: 'OPEN',
        user_id: '1'
      }
    ]);
  })

  it('findTicket', async () => {
    const dataUsers = {
      id: 1,
      title: 'Titulo 1',
      description: 'Descripcion',
      status: 'OPEN',
      user_id: '1'
    } as unknown as ITickets;

    const mockResponse: any = {
      dataValues: {
        data: dataUsers
      },
      update: jest.fn().mockImplementationOnce(() => Promise.resolve(mockResponse))
    };

    jest
      .spyOn(TicketsModel, 'findOne')
      .mockImplementation(() => Promise.resolve(dataUsers));

    const test: any = await ticketsRepository.findTicket(1);

    expect(test).toEqual(
      {
        id: 1,
        title: 'Titulo 1',
        description: 'Descripcion',
        status: 'OPEN',
        user_id: '1'
      }
    );
  })

  it('createTicket', async () => {
    const dataUsers = {
      id: 1,
      title: 'Titulo 1',
      description: 'Descripcion',
      status: 'OPEN',
      user_id: '1'
    } as unknown as ITickets;

    const mockResponse: any = {
      dataValues: {
        data: dataUsers
      },
      update: jest.fn().mockImplementationOnce(() => Promise.resolve(dataUsers))
    };

    jest
      .spyOn(TicketsModel, 'create')
      .mockImplementation(() => Promise.resolve(dataUsers));

    const test: any = await ticketsRepository.createTicket(dataUsers);

    expect(test).toEqual(
      {
        id: 1,
        title: 'Titulo 1',
        description: 'Descripcion',
        status: 'OPEN',
        user_id: '1'
      }
    );
  })

  it('updateTickets', async () => {
    const dataUsers = {
      id: 1,
      title: 'Titulo 1',
      description: 'Descripcion',
      status: 'OPEN',
      user_id: '1'
    } as unknown as ITickets;

    const mockResponse: any = {
      dataValues: {
        data: dataUsers
      },
    };

    jest
      .spyOn(TicketsModel, 'update')
      .mockImplementation(() => Promise.resolve([1, mockResponse]));

    const test: any = await ticketsRepository.updateTickets(dataUsers);

    expect(test).toEqual([1, {"dataValues": {"data": {"description": "Descripcion", "id": 1, "status": "OPEN", "title": "Titulo 1", "user_id": "1"}}}]);
  })
});