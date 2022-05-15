import { Document, Model, model, Schema } from "mongoose";

export interface IMember extends Document {
  name: string;
  code: string;
  books: IMemberBooks[];
  totalBorrow: number;
  penalty: boolean;
  penaltyDate: Number;
}

interface IMemberBooks {
  bookId: string;
  boroowDate: Number;
  returnDate: Number;
}

const MemberSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  books: {
    type: [
      {
        bookId: String,
        boroowDate: Number,
        returnDate: Number,
      },
    ],
  },
  penalty: {
    type: Boolean,
    default: false,
  },
  penaltyDate: {
    type: Number,
    default: 0,
  }
});

const Member: Model<IMember> = model<IMember>("Member", MemberSchema);

export default Member;
