import { TStudent } from './student.interface';
import { StudentModel } from './student.model';

const createStudentIntoDB = async (studentData: TStudent) => {
  // const result = await StudentModel.create(student); // built in static method

  const studentInstance = new StudentModel(studentData); // create an instance
  if (await studentInstance.isUserExists(studentData.id)) {
    throw new Error('User already exists!');
  }

  const result = await studentInstance.save(); // built in instance method provided by mongoose

  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

const deleteAStudentFromDB = async (id: string) => {
  const result = await StudentModel.deleteOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteAStudentFromDB,
};
