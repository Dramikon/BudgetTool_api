import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: {
    type: mongoose.SchemaTypes.String,
    required: true,
  },
  email: {
    type: mongoose.SchemaTypes.String,
    required: true,
    trim: true,
    unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  },
  facebookProvider: {
    type: {
      id: mongoose.SchemaTypes.String,
      token: mongoose.SchemaTypes.String,
    },
    select: false,
  },
});