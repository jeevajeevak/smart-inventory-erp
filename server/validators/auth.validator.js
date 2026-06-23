import { z } from "zod";

export const registerSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, "First name must be at least 2 characters"),

  lastName: z
    .string()
    .trim()
    .min(1, "Last name must be at least 2 characters"),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters"),

  phone: z
    .string()
    .trim()
    .optional(),

  role: z
    .enum(["admin", "manager", "sales", "warehouse"])
    .optional(),
});

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Please enter a valid email"),

  password: z
    .string()
    .min(6, "Password is required"),
});