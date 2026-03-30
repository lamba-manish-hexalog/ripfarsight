import { Response, NextFunction } from 'express';
import { AuthRequest } from './authenticate';

const ROLE_HIERARCHY: Record<string, number> = {
  'Employee': 1,
  'Manager': 2,
  'HR Admin': 3,
  'Super Admin': 4,
};

export const authorize = (...allowedRoles: string[]) =>
  (req: AuthRequest, res: Response, next: NextFunction): void => {
    const userLevel = ROLE_HIERARCHY[req.user?.role ?? ''] ?? 0;
    const minRequired = Math.min(...allowedRoles.map(r => ROLE_HIERARCHY[r] ?? 99));
    if (userLevel >= minRequired) {
      next();
    } else {
      res.status(403).json({ message: 'Forbidden: insufficient permissions' });
    }
  };
