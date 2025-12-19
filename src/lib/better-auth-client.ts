import { createAuthClient, AuthClient } from "better-auth/react";
import { createContext } from 'react';

// We can't initialize the client here because we don't have access to the
// Docusaurus context. Instead, we'll create the client in a component.

// Export a function to create a client instance.
export function createAuthClientInstance(baseURL: string) {
  return createAuthClient({
    baseURL,
    user: {
      additionalFields: {
        softwareBackground: { type: "string" },
        hardwareBackground: { type: "string" },
      },
    },
  });
}

// Export a context to hold the client instance.
// We'll provide the value in Root.tsx.
export const AuthContext = createContext<AuthClient | null>(null);