import { TStudent } from '../students/student.interface';
import { UserModel } from './user.model';

const createUserIntoDB = async (studentData: TStudent) => {
  //   if (await StudentModel.isUserExists(studentData.id)) {
  //     throw new Error('User Already Exists!');
  //   }
  const result = await UserModel.create(studentData);
  return result;
};

export const UserServices = {
  createUserIntoDB,
};
