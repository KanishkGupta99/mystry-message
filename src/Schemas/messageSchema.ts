import {z} from "zod"

export const messageSchema=z.object({
    content: z
        .string()
        .min(10,{message:'Message must be atleast 10 characters'})
        .max(200,{message:'Message cannot exceed 200 characters'})
})