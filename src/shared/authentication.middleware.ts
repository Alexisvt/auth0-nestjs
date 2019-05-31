import { Injectable, NestMiddleware } from '@nestjs/common';
import * as jwt from 'express-jwt';
import { expressJwtSecret } from 'jwks-rsa';

import { ConfigService } from '../config/config.service';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  constructor(private readonly config: ConfigService) {}

  use(req, res, next) {
    const DOMAIN = this.config.get('DOMAIN');
    const AUDIENCE = this.config.get('AUDIENCE');

    jwt({
      secret: expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: `https://${DOMAIN}/.well-known/jwks.json`,
      }),

      audience: `${AUDIENCE}`,
      issuer: `https://${DOMAIN}/`,
      algorithm: 'RS256',
    })(req, res, err => {
      if (err) {
        const status = err.status || 500;
        const message =
          err.message || 'Sorry, we were unable to process your request.';
        return res.status(status).send({
          message,
        });
      }
      next();
    });
  }
}
