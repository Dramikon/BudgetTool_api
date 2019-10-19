import * as mongoose from 'mongoose';
import { UserSchema } from '../db/models/user.model';

const User = mongoose.model('User', UserSchema);

export class UserService {
  public updateOrInsertByFacebookId(accessToken: string, refreshToken: string, profile: any, callback: any) {
    return User.findOne({
      'facebookProvider.id': profile.id
    }, function (error: any, user: any) {
      // no user was found, lets create a new one
      if (!user) {
        const newUser = new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          facebookProvider: {
            id: profile.id,
            token: accessToken
          }
        });
        return newUser.save();
      }
    });
  }
}