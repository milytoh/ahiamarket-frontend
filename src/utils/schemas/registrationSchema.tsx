// schemas/register.schema.ts
import { z } from "zod";

export const registerSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),

  email: z.string().email("Invalid email address"),

  // phoneNumber: z.string().min(10, "Provide a valid phone number"),

  password: z
    .string()
    .min(8, "password must must be up to 8 characters")
    .regex(/[A-Z]/, "Must include uppercase letter")
    .regex(/[0-9]/, "Must include number")
    .regex(/[^A-Za-z0-9]/, "Must include special character"),

  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

// otp form validation schema
export const otpSchema = z.object({
  input1: z.string(),
  input2: z.string(),
  input3: z.string(),
  input4: z.string(),
  input5: z.string(),
  input6: z.string(),
});


export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(3, "password should be above 3 character")
});
// Auto-infer TypeScript type
export type RegisterFormData = z.infer<typeof registerSchema>;
export type OtpFormData = z.infer<typeof otpSchema>
export type LoginFormData = z.infer<typeof loginSchema>
