// Types
import { JwtPayload } from 'jsonwebtoken';
import { Role } from '../types/enums.type';

export interface PayloadToken extends JwtPayload {
  role: Role;
  sub: number;
  username: string;
}
