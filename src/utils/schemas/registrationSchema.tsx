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


export const otpSchema = z.object({
  otpValue: z.number().min(1, "in")
})


// Auto-infer TypeScript type
export type RegisterFormData = z.infer<typeof registerSchema>;
