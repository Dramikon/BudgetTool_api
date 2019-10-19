import * as mongoose from 'mongoose';

export const SpendingSchema = new mongoose.Schema({
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      required: 'userId is required',
    },
    spendTypeId: {
      type: mongoose.SchemaTypes.ObjectId,
    },
    sum: {
      type: mongoose.SchemaTypes.Number,
      required: 'sum is required',
    },
    comment: {
      type: mongoose.SchemaTypes.String,
    },
    createdAt: {
      type: mongoose.SchemaTypes.Date,
      default: Date.now(),
    },
  }
);

