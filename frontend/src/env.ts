import z from 'zod';

export const envSchema = z.object({
  API_URL: z.string().url().default('http://localhost:4000'),
  NEXT_PUBLIC_API_URL: z.string().url().default('http://localhost:4000'),
  CHAT_WEBHOOK_URL: z.string().url(),
});

export type Env = z.infer<typeof envSchema>;

export const envParse = envSchema.safeParse(process.env)

if (!envParse.success) {
  throw new Error(envParse.error.errors.map(e => e.message).join('\n'));
}

export const env: Env = envParse.data;
