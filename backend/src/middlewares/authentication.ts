import { Request, Response } from "express";
import { ApiResponseHandler } from "../utils/responseHandler";
import { JWTService } from "../services/jwt";

const authenticate = (req: Request, res: Response, next) => {
  const token = req.header('token');

  if (!token) {
    return ApiResponseHandler.unauthorizedResponse(res, 'No token provided');
  }

  try {
    // Here you would normally verify the token
    // For example, using JWT:
    const decoded = JWTService.validateToken(token);
    // Optionally attach decoded info to request object
    req['user'] = decoded;

    next();
  } catch (error) {
    return ApiResponseHandler.unauthorizedResponse(res, 'Invalid token');
  }
}