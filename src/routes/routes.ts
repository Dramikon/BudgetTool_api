import { Application, Request, Response } from 'express';

export class Routes {
  public routes(app: Application) {
    app.route('/')
      .get((request: Request, response: Response) => {
        // TODO: replace with implementation
        response.status(200).send({
          message: 'Budget Tool API welcomes you!'
        });
      });
  }
}