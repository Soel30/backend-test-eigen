import { Document, Model, model, Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: string;
}

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.plugin(uniqueValidator);
const User: Model<IUser> = model<IUser>("User", UserSchema);

export default User;
