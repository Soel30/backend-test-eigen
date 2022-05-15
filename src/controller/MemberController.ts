import { Response, Request } from "express";
import Models from "../models/Model";
import Controller from "../controller/Controller";

export class MemberController {
  private static async getCurrentDate() {
    const t = new Date();
    const date = ("0" + t.getDate()).slice(-2);
    const month = ("0" + (t.getMonth() + 1)).slice(-2);
    const year = t.getFullYear();
    return `${date}/${month}/${year}`;
  }

  public static async getAllMember(req: Request, res: Response): Promise<void> {
    try {
      const members = await Models.Member.find();
      Controller.ResponseSuccess(res, members, "Success to get data");
    } catch (error) {
      Controller.ResponseError(res, error);
    }
  }

  // create function to borrow books if member not borrow book more than 2
  public static async borrowBook(req: Request, res: Response): Promise<void> {
    try {
      const { userCode, bookId } = req.body;
      const member = await Models.Member.findOne({ code: userCode });
      const book = await Models.Book.findOne({ code: bookId });
      const date = new Date();

      if (!member) {
        Controller.ResponseError(res, "Member not found");
        return;
      }

      if (member.penaltyDate > Date.now()) {
        Controller.ResponseError(res, "Member has penalty");
        return;
      } else {
        member.penalty = false;
        member.penaltyDate = 0;
      }

      if (!book) {
        Controller.ResponseError(res, "Book not found");
        return;
      }

      if (book.stock === 0) {
        Controller.ResponseError(res, "Book is not available");
        return;
      }

      if (member!.books.length >= 2) {
        Controller.ResponseError(res, "Member can't borrow more than 2 books");
        return;
      }

      member!.books.push({
        bookId: bookId,
        boroowDate: date.setHours(0, 0, 0, 0),
        returnDate: date.setDate(date.getDate() + 7),
      });

      book.stock -= 1;
      member!.totalBorrow += 1;

      await member!.save();
      await book.save();

      Controller.ResponseSuccess(res, member, "Success to borrow book");
    } catch (error) {
      Controller.ResponseError(res, error);
    }
  }

  //create function to return book and check if his member return book on time or not
  public static async returnBook(req: Request, res: Response): Promise<void> {
    try {
      const { userCode, bookId } = req.body;
      const member = await Models.Member.findOne({ code: userCode });
      const book = await Models.Book.findOne({ code: bookId });
      const date = new Date();

      if (!member) {
        Controller.ResponseError(res, "Member not found");
        return;
      }

      if (!book) {
        Controller.ResponseError(res, "Book not found");
        return;
      }

      const memberBook = member!.books.find(
        (memberBook: any) => memberBook.bookId === bookId
      );

      if (!memberBook) {
        Controller.ResponseError(res, "Member not borrow this book");
        return;
      }

      if (memberBook.returnDate < Date.now()) {
        member!.penalty = true;
        member.penaltyDate = date.setDate(date.getDate() + 3);
      }

      member!.books = member!.books.filter(
        (memberBook: any) => memberBook.bookId !== bookId
      );

      book.stock += 1;
      member!.totalBorrow -= 1;

      await member!.save();
      await book.save();

      Controller.ResponseSuccess(res, member, "Success to return book");
    } catch (error) {
      Controller.ResponseError(res, error);
    }
  }
}
