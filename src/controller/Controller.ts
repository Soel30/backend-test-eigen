import { Response } from "express";

export class Controller {
  public static async ResponseError(res: Response, error: any): Promise<void> {
    res.status(400).json({
      status: "error",
      message: error,
    });
  }

  public static async ResponseSuccess(
    res: Response,
    data: any,
    message:
      | "Success to get data"
      | "Success to create data"
      | "Success to update data"
      | "Success to delete data"
      | any
  ): Promise<void> {
    res.status(200).json({
      status: "success",
      data: data,
      message: message,
    });
  }
}

export default Controller;
