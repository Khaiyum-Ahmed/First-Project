import { Schema, model } from 'mongoose';
import {
  TGuardian,
  TLocalGuardian,
  TStudent,
  StudentMethods,
  TUserName,
  StudentMongooseModel,
} from './student.interface';
const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    trim: true,
  },
  middleName: { type: String, trim: true },
  lastName: {
    type: String,
    required: [true, 'Last Name is required'],
    trim: true,
  },
});
const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: [true, 'Father Name is required'],
    trim: true,
  },
  fatherOccupation: {
    type: String,
    required: [true, 'Father Occupation is required'],
    trim: true,
  },
  fatherContactNo: {
    type: String,
    required: [true, 'Father Contact No is required'],
    trim: true,
  },
  motherName: {
    type: String,
    required: [true, 'Mother Name is required'],
    trim: true,
  },
  motherOccupation: {
    type: String,
    required: [true, 'Mother Occupation is required'],
    trim: true,
  },
  motherContactNo: {
    type: String,
    required: [true, 'Mother Contact No is required'],
    trim: true,
  },
});
const localGuardianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: [true, 'Guardian Name is required'],
    trim: true,
  },
  occupation: {
    type: String,
    required: [true, 'Guardian Occupation is required'],
    trim: true,
  },
  contactNo: {
    type: String,
    required: [true, 'Guardian Contact No is required'],
    trim: true,
  },
  address: {
    type: String,
    required: [true, 'Guardian Address is required'],
    trim: true,
  },
});

const studentSchema = new Schema<
  TStudent,
  StudentMongooseModel,
  StudentMethods
>({
  id: { type: String, required: [true, 'ID is required'], unique: true },
  name: { type: userNameSchema, required: [true, 'Name is required'] },
  gender: {
    type: String,
    enum: {
      values: ['Male', 'Female', 'Others'],
      message: '{VALUE} is not valid',
    },
    required: [true, 'Gender is required'],
  },
  DOB: {
    type: String,
    required: [true, 'Date Of Birth is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
  },
  contactNo: {
    type: String,
    required: [true, 'Contact No is required'],
    trim: true,
  },
  emergencyContactNo: {
    type: String,
    required: [true, 'Emergency Contact No is required'],
    trim: true,
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: '{VALUE} is not a valid blood Group',
    },
  },
  presentAddress: {
    type: String,
    required: [true, 'Present Address is required'],
    trim: true,
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent Address is required'],
    trim: true,
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian is required'],
    trim: true,
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local Guardian is required'],
    trim: true,
  },
  profileImg: { type: String },
  isActive: { type: String, enum: ['Active', 'Blocked'], default: 'Active' },
});

studentSchema.methods.isUserExists = async function (id: string) {
  const existingUser = await StudentModel.findOne({ id });
  return existingUser;
};

export const StudentModel = model<TStudent, StudentMongooseModel>(
  'Student',
  studentSchema
);
