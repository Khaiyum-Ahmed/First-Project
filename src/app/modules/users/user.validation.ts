import z from 'zod';

export const userValidationSchema = z.object({
  id: z.string(),
  password: z.string().max(20, 'password can not be more than 20 characters'),
  needsPasswordChange: z.boolean().optional(),
  role: z.enum(['admin', 'student', 'faculty']),
  status: z.enum(['In-Progress', 'Blocked']).default('In-Progress'),
  isDeleted: z.boolean().optional().default(false),
});
