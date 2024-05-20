import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  googleLogin(req) {
    console.log(req);
    if (!req.user) {
      return 'no user from google';
    }
    return {
      message: 'user info google',
      user: req.user,
    };
  }
}
