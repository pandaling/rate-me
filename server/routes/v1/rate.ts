import { Router, Application, Request } from 'express';
import { RateController } from '../../controllers/rate.controller';

export const rate = (app: Application) => {
  const router = Router();
  const rateController = new RateController(app);

  router
    .post('/add', (req, res) => rateController.add(req, res))
    .get('/query', (req, res) => rateController.query(req, res));

  return router;
};
