import * as mongoose from 'mongoose';
import * as moment from 'moment';
import { Request, Response } from 'express';
import { SpendingSchema } from '../../db/models/spending.model';
import { BaseController } from './base.controller';

const Spending = mongoose.model('Spending', SpendingSchema);

export class SpendingController extends BaseController {

  public static getById(request: Request, response: Response) {
    Spending.findById(request.params.spendingId, (error, result) => this.handleResult(error, result, response))
  }

  public static getByDate(request: Request, response: Response) {
    const searchDateFrom = moment(request.params.date).startOf('day');
    const searchDateTo = moment(request.params.date).endOf('day');
    Spending.find({
      createdAt: { $gt: searchDateFrom, $lt: searchDateTo }
    }, (error, result) => this.handleResult(error, result, response))
  }

  public static getByDateRange(request: Request, response: Response) {
    const searchDateFrom = moment(request.params.dateFrom).startOf('day');
    const searchDateTo = moment(request.params.dateTo).endOf('day');
    Spending.find({
      createdAt: { $gt: searchDateFrom, $lt: searchDateTo }
    }, (error, result) => this.handleResult(error, result, response))
  }

  public static put(request: Request, response: Response) {
    Spending.findByIdAndUpdate(request.params.spendingId, request.body, { new: true },
      (error, result) => this.handleResult(error, result, response));
  }

  public static post(request: Request, response: Response) {
    let spending = new Spending(request.body);
    spending.save((error, result) => this.handleResult(error, result, response));
  }

  public static delete(request: Request, response: Response) {
    Spending.findByIdAndRemove(request.params.spendingId, (error, result) => this.handleDeleteResult(error, result, response))
  }
}