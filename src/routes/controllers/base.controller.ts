import { Response } from 'express';

export class BaseController {
  public static handleResult(error: any, result: any, response: Response) {
    if(error) {
      response.send(error);
    } else {
      response.json(result);
    }
  }

  public static handleDeleteResult(error: any, result: any, response: Response) {
    if(error) {
      response.send(error);
    } else {
      response.json({ message: 'Successfully deleted object' });
    }
  }
}