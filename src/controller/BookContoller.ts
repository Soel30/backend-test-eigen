import { Response, Request } from "express";
import Models from "../models/Model";
import Controller from "../controller/Controller";

export class BookController {
  public static async getAllBook(req: Request, res: Response): Promise<void> {
    try {
      const books = await Models.Book.find({ stock: { $gt: 0 } });
      Controller.ResponseSuccess(res, books, "Success to get data");
    } catch (error) {
      Controller.ResponseError(res, error);
    }
  }
}
