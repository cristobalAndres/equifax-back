import { Request, Response } from 'express';
import TicketsRepository from '../../repositories/tickets.repository';

export default class TicketsController {
  static async getTickets(req: Request, res: Response) {
    try {
      const query = req.query;
      const tickets = await TicketsRepository.getTickets(query.status)
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

  static async updateTicket(req: Request, res: Response) {
    try {
      const body = req.body;
      await TicketsRepository.updateTicket(body, body.id)
      return res.sendStatus(204);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}