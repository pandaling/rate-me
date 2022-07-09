import { Application, Router } from 'express';
import { test } from './test';
import { rate } from './rate';

export class RoutesV1 {
  private readonly app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  /**
   * NOTE: Put your routes here
   * E.g. router.use('/path', route1);
   */
  register() {
    this.app.use('/v1', test(this.app));
    this.app.use('/v1/rate', rate(this.app));
  }
}
