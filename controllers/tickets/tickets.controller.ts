import { Request, Response } from 'express';
import TicketsRepository from '../../repositories/tickets.repository';

export default class TicketsController {
  static async getTickets(req: Request, res: Response) {
    try {
      const tickets = await TicketsRepository.getTickets()
      return res.json(tickets);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }

  static async createTicket(req: Request, res: Response) {
    try {
      const body = req.body;
      const users = await TicketsRepository.createTicket(body)
      return res.json(users);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}