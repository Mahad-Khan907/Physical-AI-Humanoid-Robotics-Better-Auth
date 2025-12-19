import { createAuthClient, AuthClient } from "better-auth/react";
import { createContext } from "react";

// Create auth client instance
export function createAuthClientInstance() {
  return createAuthClient({
    baseURL: "https://better-auth-backend.up.railway.app",
    user: {
      additionalFields: {
        softwareBackground: { type: "string" },
        hardwareBackground: { type: "string" },
      },
    },
  });
}

// Auth context
export const AuthContext = createContext<AuthClient | null>(null);
