import { Request, Response } from "express";
import { UserModel } from "../models/userModel";
import { CreateUserDto } from "../interfaces/UserDto";

export class UserController {
  async create(req: Request, res: Response) {
    try {
      const input: CreateUserDto = req.body;

      const newUser = new UserModel(input);
      const savedUser = await newUser.save();

      res.status(201).json(savedUser);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  }

  async getAll(_req: Request, res: Response) {
    try {
      const users = await UserModel.find();
      res.status(200).json(users);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await UserModel.findById(id);
      if (!user) {
        res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = await UserModel.findById(id);
      if (!user) {
        res.status(404).json({ message: "User not found" });
      }
      const updatedUser = await UserModel.findByIdAndUpdate(id,
        { $set: { ...req.body } }, { new: true }
      )
      res.status(200).json(updatedUser);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedUser = await UserModel.findByIdAndDelete(id);
      if (!deletedUser) {
        res.status(404).json({ message: "User not found" });
      }
      res.status(204).json();
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  }
}