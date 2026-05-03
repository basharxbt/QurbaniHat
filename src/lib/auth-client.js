import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL:
    "https://qurbani-hat-9w66-git-main-shafiullahbashaar-7454s-projects.vercel.app/",
});
export const { signIn, signUp, useSession, updateUser } = createAuthClient();
