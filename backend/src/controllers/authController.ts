import { config } from "../config/config";
import { JWTService } from "../services/jwt";
import { ApiResponseHandler } from "../utils/responseHandler";
import { Request, Response } from "express";

export class AuthController {
  async validate(req: Request, res: Response) {
    try {
      const input = req.body;
      const token = JWTService.generateToken(input.apiKey);

      const valid = input?.apiKey === config.API_KEY;

      if (!valid) {
        return ApiResponseHandler.successResponseWithData(
          res,
          "Invalid API key",
          {
            isValid: false,
            token: ""
          }
        );
      }

      return ApiResponseHandler.successResponseWithData(
        res,
        "API key is valid",
        {
          isValid: true,
          token,
        }
      );

    } catch (e) {
      return ApiResponseHandler.internalErrorResponse(
        res,
        "An error occurred while validating the API key"
      );
    }
  }
}