import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import { StudentJoiValidationSchema } from './studentValidationJoiSchema';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student;
    const { error } = StudentJoiValidationSchema.validate(student);

    // will call service function to send this data
    const result = await StudentServices.createStudentIntoDB(student);
    // send response
    if (error) {
      res.status(500).json({
        success: false,
        message: 'Something Went wrong',
        error: error.details,
      });
    }
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Students are retrieve successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(
      studentId as string
    );
    res.status(200).json({
      success: true,
      message: 'Single Student is retrieve successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteAStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteAStudentFromDB(
      studentId as string
    );
    res.status(200).json({
      success: true,
      message: 'Student Deleted successfully Done',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  deleteAStudent,
};
