import * as jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { environment } from '../env/environment';

export class TokenService {
  private static createToken(auth: any) {
    return jwt.sign({
        id: auth.id
      }, environment.FACEBOOK_SECRET,
      {
        expiresIn: 60 * 120
      });
  };

  public static generateToken(request: Request, response: Response, next: any) {
    request.token = this.createToken(request.auth);
    next();
  };

  public static addToken(request: Request, response: Response) {
    response.setHeader('x-auth-token', request.token);
    response.status(200).send(request.auth);
  };
}