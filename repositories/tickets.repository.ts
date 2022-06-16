import { Tickets, ITickets, Users } from '../models';

export default class TicketsRepository {
  static async getTickets(params = null) {
    let where = {};
    if (params) {
      where = {
        status: params,
      };
    }
    try {
      const tickets = await Tickets.findAll({
        include: {
          attributes: ['id', 'name', 'email'],
          model: Users,
          as: 'users'
        },
        order: [["created_at", "DESC"]],
        where,
      }) as ITickets[];
      return tickets;
    } catch (error) {
      console.log(`ERROR - ${error}`)
      throw new Error(error);
    }
  }

  static async findTicket(id: number) {
    try {
      const ticket = await Tickets.findOne({
        where: {
          id,
        }
      }) as ITickets;
      return ticket;
    } catch (error) {
      console.log(`ERROR - ${error}`)
      throw new Error(error);
    }
  }

  static async createTicket(ticket: ITickets) {
    try {
      const create = await Tickets.create(ticket);
      return create;
    } catch (error) {
      console.log(`ERROR - ${error}`)
      throw new Error(error);
    }
  }

  static async updateTicket(ticket: ITickets, id: number) {
    try {
      const create = await Tickets.update(ticket, {
        where: {
          id,
        },
      });
      return create;
    } catch (error) {
      console.log(`ERROR - ${error}`)
      throw new Error(error);
    }
  }
}
