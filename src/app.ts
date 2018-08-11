import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './routes/routes';

// var app = express();

class App {
  public app: express.Application;
  public routeProvider: Routes = new Routes();

  constructor() {
    this.app = express();
    this.configure();
    this.routeProvider.routes(this.app);
  }

  private configure() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;