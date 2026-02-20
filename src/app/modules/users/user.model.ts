/* eslint-disable @typescript-eslint/no-this-alias */
import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';
const userSchema = new Schema<TUser>(
  {
    id: { type: String, required: true },
    password: { type: String, required: true },
    needsPasswordChange: { type: Boolean, default: true },
    role: { type: String, enum: ['admin', 'student', 'faculty'] },
    status: {
      type: String,
      enum: ['In-Progress', 'Blocked'],
      default: 'In-Progress',
    },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

// pre hook middleware
userSchema.pre('save', async function () {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds)
  );
});

// post hook middleware
userSchema.post('save', function () {
  this.password = '';
});

export const UserModel = model<TUser>('user', userSchema);
