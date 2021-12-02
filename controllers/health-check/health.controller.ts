import { Request, Response } from 'express';

export class HealthCheckController {
  
  static async healthCheck(_req: Request, res: Response) {
    res.send('Hola gente :D!');
  }
}
