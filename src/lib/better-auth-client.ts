// src/lib/better-auth-client.ts
import { createAuthClient } from "better-auth/react";
import { createContext } from "react";

export function createAuthClientInstance() {
  return createAuthClient({
    // Ensure this matches your live Railway backend URL
    baseURL: "https://mahad-khan907-book-better-auth.hf.space/",
    fetchOptions: {
      // CRITICAL: This allows the browser to send/receive cookies across domains
      credentials: "include", 
    },
    user: {
      additionalFields: {
        softwareBackground: { type: "string" },
        hardwareBackground: { type: "string" },
      },
    },
  });
}

export const AuthContext = createContext<ReturnType<typeof createAuthClient> | null>(null);
