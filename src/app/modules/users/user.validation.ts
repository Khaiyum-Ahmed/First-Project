import z from 'zod';

export const userValidationSchema = z.object({
  password: z
    .string({ error: 'Password must be string' })
    .max(20, 'password can not be more than 20 characters')
    .optional(),
});
