import { Request, Response } from 'express';
import { UserServices } from './user.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student: studentData } = req.body;
    const result = await UserServices.createUserIntoDB(password, studentData);
    // send response
    res.status(200).json({
      success: true,
      message: 'Student is Created Successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something Went wrong',
      error: err,
    });
  }
};

export const UserControllers = {
  createStudent,
};
