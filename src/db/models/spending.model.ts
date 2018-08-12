import * as mongoose from 'mongoose';

export const SpendingSchema = new mongoose.Schema({
    userId: {
      type: String,
      required: 'userId is required',
    },
    spendTypeId: {
      type: String,
    },
    sum: {
      type: Number,
      required: 'sum is required',
    },
    comment: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  }
);

