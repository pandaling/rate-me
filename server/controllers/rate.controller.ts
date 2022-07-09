import { Application, Request, Response } from "express";

export class RateController {
  private readonly app: Application;
  private models: any;

  constructor(app: Application) {
    this.app = app;
    this.models = app.get('db').models;
  }

  public async add(req: Request, res: Response) {
    try {
      let insert = new this.models.User(req.body);

      let d = await insert.save();

      res.status(200).send(d);
    }
    catch (e) {
      console.error(e);
      res.status(500).send('Error');
    }
  }

  public async query(req: Request, res: Response) {
    try {
      let data = await this.models.User
      .find({})
      .select('rating')
      .select('-_id')
      .lean()
      .exec();

      res.status(200).send(data);
    }
    catch (e) {
      console.error(e);
      res.status(500).send('Error');
    }
  }
}
