import { Application, Request, Response } from 'express';
import { AppController } from './controllers/app.controller';
import {SpendingController} from "./controllers/spending.controller";
import {SpendTypeController} from "./controllers/spendType.controller";

export class Routes {
  public routes(app: Application) {
    // default welcome route
    app.route('/')
      .get(AppController.get);

    app.route('/spending/:spendingId')
      .get(SpendingController.getById)
      .put(SpendingController.put)
      .delete(SpendingController.delete);

    app.route('/spending/:date')
      .get(SpendingController.getByDate);

    app.route('/spending/:dateFrom/:dateTo')
      .get(SpendingController.getByDate);

    app.route('/spending')
      .post(SpendingController.post);

    app.route('/spendType')
      .get(SpendTypeController.get)
      .post(SpendTypeController.post)
      .delete(SpendTypeController.delete)

    // get some analytics maybe
  }
}