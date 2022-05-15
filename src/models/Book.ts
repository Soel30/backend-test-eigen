import { Document, Model, model, Schema } from "mongoose";

export interface IBook extends Document {
  code: string;
  title: string;
  author: string;
  stock: number;
}

const BookSchema: Schema = new Schema({
  code: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
});

const Book: Model<IBook> = model<IBook>("Book", BookSchema);

export default Book;
