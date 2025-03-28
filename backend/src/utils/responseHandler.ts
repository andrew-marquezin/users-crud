import { Response } from "express";

class ApiResponseHandler {
  successResponse(res: Response, message: string) {
    const resData = {
      status: 1,
      message,
    }
    return res.status(200).json(resData);
  }

  successResponseWithData(res: Response, message: string, data: unknown) {
    const resData = {
      status: 1,
      message,
      data,
    }
    return res.status(200).json(resData);
  }

  noContentResponse(res: Response) {
    return res.status(204).json();
  }

  createdResponse(res: Response, message: string, data: unknown) {
    const resData = {
      status: 1,
      message,
      data,
    }
    return res.status(201).json(resData);
  }

  internalErrorResponse(res: Response, message: string) {
    const resData = {
      status: 0,
      message,
    }
    return res.status(500).json(resData);
  }

  notFoundResponse(res: Response, message: string) {
    const resData = {
      status: 0,
      message,
    }
    return res.status(404).json(resData);
  }

  validationErrorResponse(res: Response, message: string) {
    const resData = {
      status: 0,
      message,
    }
    return res.status(400).json(resData);
  }

  validationErrorWithData(res: Response, message: string, data: unknown) {
    const resData = {
      status: 1,
      message,
      data,
    }
    return res.status(400).json(resData);
  }

  unauthorizedResponse(res: Response, message: string) {
    const resData = {
      status: 0,
      message,
    }
    return res.status(401).json(resData);
  }
}