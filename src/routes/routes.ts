import * as passport from 'passport';
import { Application } from 'express';
import { AppController } from './controllers/app.controller';
import { SpendingController } from './controllers/spending.controller';
import { SpendTypeController } from './controllers/spendType.controller';
import { AuthController } from './controllers/auth.controller';
import { TokenService } from '../services/token.service';
import { Auth } from './auth';

export class Routes {
  private readonly API_PREFIX: string = 'api';

  public routes(app: Application) {
    // default welcome route
    app.route(`/${this.API_PREFIX}`)
      .get(AppController.get);

    app.route(`/${this.API_PREFIX}/auth/fb`)
      .post(passport.authenticate('facebook-token',{ session: false }),
        AuthController.post, TokenService.generateToken, TokenService.addToken);

    app.route(`/${this.API_PREFIX}/spending/:spendingId/`)
      .get(Auth.check, SpendingController.getById)
      .put(Auth.check, SpendingController.put)
      .delete(Auth.check, SpendingController.delete);

    app.route(`/${this.API_PREFIX}/spending/:date`)
      .get(Auth.check, SpendingController.getByDate);

    app.route(`/${this.API_PREFIX}/spending/:dateFrom/:dateTo`)
      .get(Auth.check, SpendingController.getByDate);

    app.route(`/${this.API_PREFIX}/spending`)
      .post(Auth.check, SpendingController.post);

    app.route(`/${this.API_PREFIX}/spendType`)
      .get(Auth.check, SpendTypeController.get)
      .post(Auth.check, SpendTypeController.post)
      .delete(Auth.check, SpendTypeController.delete)
  }
}