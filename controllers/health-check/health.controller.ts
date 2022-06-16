import { Request, Response } from 'express';

export class HealthCheckController {
  
  static async healthCheck(_req: Request, res: Response) {
    return res.send('Hola gente :D!');
  }
}
