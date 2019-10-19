import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import { Routes } from './routes/routes';
import { environment } from './env/environment';
import * as passport from 'passport';
import * as FacebookTokenStrategy from 'passport-facebook-token';

// var app = express();

class App {
  public app: express.Application;
  public routeProvider: Routes = new Routes();

  constructor() {
    this.app = express();
    this.configureApi();
    this.configureMongo();
    this.configurePassport();
    this.routeProvider.routes(this.app);
  }

  private configureApi() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private configureMongo() {
    // mongoose.Promise = global.Promise;
    mongoose.connect(environment.MONGODB_URI);
  }

  public configurePassport() {
    passport.use(new FacebookTokenStrategy({
      clientID: environment.FACEBOOK_ID,
      clientSecret: environment.FACEBOOK_SECRET,
    }, this.verifyUser));
  }

  public verifyUser(accessToken: any, refreshToken: any, profile: any, done: any) {
    // TODO: implement actual checking
    // User.upsertFbUser(accessToken, refreshToken, profile, function(err, user) {
    //     return done(err, user);
    //   });
  }
}

export default new App().app;