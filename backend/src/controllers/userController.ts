import { Request, Response } from "express";
import { UserModel } from "../models/userModel";
import { CreateUserDto } from "../interfaces/UserDto";
import { ApiResponseHandler } from "../utils/responseHandler";

export class UserController {
  async create(req: Request, res: Response) {
    try {
      const input: CreateUserDto = req.body;

      const newUser = new UserModel(input);
      const savedUser = await newUser.save();

      ApiResponseHandler.createdResponse(
        res,
        "User created successfully",
        savedUser,
      );
    } catch (e) {
      ApiResponseHandler.validationErrorResponse(
        res,
        e.message,
      );
    }
  }

  async getAll(_req: Request, res: Response) {
    try {
      const users = await UserModel.find();
      ApiResponseHandler.successResponseWithData(
        res,
        "Users retrieved successfully",
        users,
      );
    } catch (e) {
      ApiResponseHandler.internalErrorResponse(
        res,
        e.message,
      );
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await UserModel.findById(id);
      if (!user) {
        ApiResponseHandler.notFoundResponse(
          res,
          "User not found",
        );
      }
      ApiResponseHandler.successResponseWithData(
        res,
        "User retrieved successfully",
        user,
      );
    } catch (e) {
      ApiResponseHandler.internalErrorResponse(
        res,
        e.message,
      );
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await UserModel.findById(id);
      if (!user) {
        ApiResponseHandler.notFoundResponse(
          res,
          "User not found",
        );
      }
      return await UserModel.findByIdAndUpdate(id,
        { $set: { ...req.body } }, { new: true }
      ).then((updatedUser) => {
        ApiResponseHandler.successResponseWithData(
          res,
          "User updated successfully",
          updatedUser,
        );
      }).catch((e) => {
        ApiResponseHandler.validationErrorResponse(
          res,
          e.message,
        );
      });
    } catch (e) {
      ApiResponseHandler.internalErrorResponse(
        res,
        e.message,
      );
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedUser = await UserModel.findByIdAndDelete(id);
      if (!deletedUser) {
        ApiResponseHandler.notFoundResponse(
          res,
          "User not found",
        );
      }
      ApiResponseHandler.noContentResponse(res);
    } catch (e) {
      ApiResponseHandler.internalErrorResponse(
        res,
        e.message,
      );
    }
  }
}