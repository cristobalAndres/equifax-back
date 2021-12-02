import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(cors());

app.use('', routes.HealthCheck)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Hello mundillo :D ${port}`);
})