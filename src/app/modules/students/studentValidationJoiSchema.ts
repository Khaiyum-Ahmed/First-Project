import Joi from 'joi';

const userNameValidationSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  middleName: Joi.string().trim().optional(),
  lastName: Joi.string().trim().required(),
});

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().trim().required(),
  fatherOccupation: Joi.string().trim().required(),
  fatherContactNo: Joi.string().trim().required(),

  motherName: Joi.string().trim().required(),
  motherOccupation: Joi.string().trim().required(),
  motherContactNo: Joi.string().trim().required(),
});

const localGuardianValidationSchema = Joi.object({
  name: Joi.string().trim().required(),
  occupation: Joi.string().trim().required(),
  contactNo: Joi.string().trim().required(),
  address: Joi.string().trim().required(),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().required(),

  name: userNameValidationSchema.required(),

  gender: Joi.string().valid('Male', 'Female', 'Others').required(),

  DOB: Joi.string().trim().required(),

  email: Joi.string().email().trim().required(),

  contactNo: Joi.string().trim().required(),

  emergencyContactNo: Joi.string().trim().required(),

  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .optional(),

  presentAddress: Joi.string().trim().required(),

  permanentAddress: Joi.string().trim().required(),

  guardian: guardianValidationSchema.required(),

  localGuardian: localGuardianValidationSchema.required(),

  profileImg: Joi.string().optional(),

  isActive: Joi.string().valid('Active', 'Blocked').default('Active'),
});

export const StudentJoiValidationSchema = studentValidationSchema;
