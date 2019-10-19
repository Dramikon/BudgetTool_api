import * as mongoose from 'mongoose';

export const SpendingSchema = new mongoose.Schema({
  name: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
});