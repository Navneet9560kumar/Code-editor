import { z } from "zod";

export const signupSchema = z.object({
  username: z.string().min(20, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
// ye jo hai ab ye scema hai singup ka jo ki zod se banaya gaya hai
// isme username,email,password hai jo ki string hai aur username ki length 3 se jyada honi chahiye
// email ki format sahi honi chahiye aur password ki length 6 se jyada honi chahiye 
