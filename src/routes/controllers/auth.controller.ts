import * as passport from 'passport';
import { Request, Response } from 'express';
import { BaseController } from './base.controller';

export class AuthController extends BaseController {
  public static post(request: Request, response: Response, next: any) {
    if (!request.user) {
      response.status(401).send({
        message: 'Sorry, you don\'t have access',
      });
    }

    // prepare token for API
    request.auth = {
      id: request.user.id
    };
    next();
  }
}