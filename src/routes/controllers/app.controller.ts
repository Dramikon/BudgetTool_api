import { Request, Response } from 'express';

export class AppController {

  public static get(request: Request, response: Response) {
    // TODO: replace with implementation
    response.status(200).send({
      message: 'Budget Tool API welcomes you!'
    });
  }
}