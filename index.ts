require('dotenv').config();
import Middleware from './middleware/validToken';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { getSwaggerSpecs } from './swagger';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(express.json({ limit: '50mb' }));
// CORS
app.use(cors());

app.use(
    `/api-docs`,
    swaggerUi.serve,
    swaggerUi.setup(getSwaggerSpecs(), { explorer: true }),
  );

// RUTAS
app.use('', routes.HealthCheck);
app.use('', routes.Auth);
app.use('/users', Middleware.checkToken, routes.Users);
app.use('/tickets', Middleware.checkToken, routes.Tickets);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Hello mundillo :D ${port}`);
})