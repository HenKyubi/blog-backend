// Libs
import { sign, verify } from 'jsonwebtoken';

// Types
import { JWTMock } from '../interfaces/jwt.interface';

// Configs
const JWT_SECRET = process.env.JWT_SECRET;

export const generateToken = (userData: JWTMock) => {
  const jwt = sign(userData, JWT_SECRET, {
    expiresIn: '4h',
  });
  return jwt;
};

export const verifyToken = (jwt: string) => {
  const tokenData: JWTMock = verify(jwt, JWT_SECRET) as JWTMock;
  return tokenData;
};
