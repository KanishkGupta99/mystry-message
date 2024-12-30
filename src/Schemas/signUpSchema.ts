import {z} from "zod"

export const userNameValidation=z
    .string()
    .min(2,"Username should be alteast 2 characters")
    .max(20,"Username cannot be more than 20 charaters")
    .regex(/^[a-zA-Z0-9._-]+/,"Username must not contain invalid characters")

export const signUpSchema=z.object({
    username: userNameValidation,
    email: z.string().email({message:"Invalid email address"}),
    password: z.string().min(6,{message:"Password must be atleast 6 characters"})
})