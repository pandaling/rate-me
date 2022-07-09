import express, { Application } from 'express';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';
import { MongoConnector } from './database/MongoConnector';
import { RoutesV1 } from './routes/v1';

const app: Application = express();

const config = dotenv.config({ path: __dirname + '/config/.env.dev' });
if (config.error) {
  console.error(config.error);
}

const mongo = new MongoConnector({
  mongoUrl: process.env.MONGO_URL,
});

const db = mongo.connect().registerSchema();
app.set('db', db);

app.use(compression());
app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routesv1 = new RoutesV1(app);
routesv1.register();

export default app;
