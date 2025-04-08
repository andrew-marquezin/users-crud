import { Response } from "express";

export class ApiResponseHandler {
  static successResponse(res: Response, message: string) {
    const resData = {
      status: 1,
      message,
    }
    return res.status(200).json(resData);
  }

  static successResponseWithData(res: Response, message: string, data: unknown) {
    const resData = {
      status: 1,
      message,
      data,
    }
    return res.status(200).json(resData);
  }

  static noContentResponse(res: Response) {
    return res.status(204).json();
  }

  static createdResponse(res: Response, message: string, data: unknown) {
    const resData = {
      status: 1,
      message,
      data,
    }
    return res.status(201).json(resData);
  }

  static internalErrorResponse(res: Response, message: string) {
    const resData = {
      status: 0,
      message,
    }
    return res.status(500).json(resData);
  }

  static notFoundResponse(res: Response, message: string) {
    const resData = {
      status: 0,
      message,
    }
    return res.status(404).json(resData);
  }

  static validationErrorResponse(res: Response, message: string) {
    const resData = {
      status: 0,
      message,
    }
    return res.status(400).json(resData);
  }

  static validationErrorWithData(res: Response, message: string, data: unknown) {
    const resData = {
      status: 1,
      message,
      data,
    }
    return res.status(400).json(resData);
  }

  static unauthorizedResponse(res: Response, message: string) {
    const resData = {
      status: 0,
      message,
    }
    return res.status(401).json(resData);
  }
}