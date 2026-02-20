import config from '../../config';
import { TStudent } from '../students/student.interface';
import { StudentModel } from '../students/student.model';
import { TUser } from './user.interface';
import { UserModel } from './user.model';

const createUserIntoDB = async (password: string, studentData: TStudent) => {
  //   if (await StudentModel.isUserExists(studentData.id)) {
  //     throw new Error('User Already Exists!');
  //   }
  const userData: Partial<TUser> = {};

  //   if password is not given, use default password
  userData.password = password || (config.default_pass as string);

  //   set student role
  userData.role = 'student';

  //   set manually generated Id
  userData.id = '2030100001';

  //   create a user
  const newUser = await UserModel.create(userData);

  //   create a student
  if (Object.keys(userData).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;
  }

  const newStudent = await StudentModel.create(studentData);
  return newStudent;
};

export const UserServices = {
  createUserIntoDB,
};
