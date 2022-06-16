import { HealthCheckController } from '../../controllers/health-check/health.controller';
import { Response } from 'jest-express/lib/response';
import { Request } from 'jest-express/lib/request';


let req;
let res;

beforeEach(async () => {
  jest.resetModules();
  req = new Request();
  res = new Response();
});

describe('Test HealthCheckController', () => {
  it('health-check', async () => {
    expect(HealthCheckController).toBeDefined();
  })

  it('health-check-response', async () => {
    const test: any = await HealthCheckController.healthCheck(req, res);
    expect(test.body).toEqual('Hola gente :D!');
  })
});