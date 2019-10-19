import * as expressJwt from 'express-jwt';
import { Request } from 'express';
import { environment } from '../env/environment';

export class Auth {
  public static check = expressJwt({
    secret: environment.FACEBOOK_SECRET,
    requestProperty: 'auth',
    getToken: function(request: Request) {
      const token = request.headers['x-auth-token'];
      return token ? token : null;
    }
  });
}