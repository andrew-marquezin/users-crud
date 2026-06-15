import jwt from 'jsonwebtoken';
import { config } from '../../config/config';


export class JWTService {
  static generateToken(apiKey: string): string {
    const data = {
      apiKey,
    };

    return jwt.sign(data, config.JWT_SECRET, {
      expiresIn: config.JWT_EXPIRATION
    });
  }

  static validateToken(token: string) {
    try {
      const decoded = jwt.verify(token, config.JWT_SECRET);
      return decoded;
    } catch (e) {
      throw new Error('Invalid API key');
    }
  }
}