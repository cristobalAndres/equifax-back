import { Tickets, ITickets } from '../models';

export default class TicketsRepository {
  static async getTickets() {
    try {
      const tickets = await Tickets.findAll({
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
}
