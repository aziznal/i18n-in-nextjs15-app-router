// import { z } from "@/lib/i18n/zod";
import { z } from "zod";

const emailSchema = z.string().email().min(1).max(255);

const passwordSchema = z.string().min(8).max(255);

export const loginFormSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type LoginForm = z.infer<typeof loginFormSchema>;
