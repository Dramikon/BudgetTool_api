import { Request, Response } from 'express';

export class SpendTypeController {

  public static get(request: Request, response: Response) {
    // TODO: replace with implementation
    response.status(200).send({
      message: 'get endpoint for spend types'
    });
  }

  public static post(request: Request, response: Response) {
    // TODO: replace with implementation
    response.status(200).send({
      message: 'post endpoint for spend types'
    });
  }

  public static delete(request: Request, response: Response) {
    // TODO: replace with implementation
    response.status(200).send({
      message: 'delete endpoint for spend types'
    });
  }
}