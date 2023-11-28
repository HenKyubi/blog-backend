// Libs
import { sign, verify } from 'jsonwebtoken';

// Types
import { PayloadToken } from '../interfaces/jwt.interface';

// Configs
const JWT_SECRET = process.env.JWT_SECRET;

export const generateToken = (userData: PayloadToken) => {
  const jwt = sign(userData, JWT_SECRET, {
    expiresIn: '4h',
  });
  return jwt;
};

export const verifyToken = (jwt: string) => {
  const tokenData: PayloadToken = verify(jwt, JWT_SECRET) as PayloadToken;
  return tokenData;
};
