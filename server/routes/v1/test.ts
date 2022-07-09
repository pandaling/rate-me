import { Router, Application, Request } from 'express';

export const test = (app: Application) => {
  const router = Router();

  router
    .get('/test', (req, res) => {
      res.send('Hello boss!');
    });

  return router;
};
