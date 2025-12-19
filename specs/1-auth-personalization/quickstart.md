# Quickstart: Authentication Backend

**Feature**: User Authentication and Personalization
**Date**: 2025-12-15

This guide provides instructions to set up and run the authentication backend locally.

## Prerequisites

- Node.js (v20.x or later)
- npm or yarn
- Access to the project's Neon PostgreSQL database credentials.

## Setup

1.  **Navigate to the backend directory**:
    ```bash
    cd auth-backend
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Configure Environment Variables**:
    Create a `.env` file in the `auth-backend` directory. This file will hold the credentials for the database and other secrets. **Do not commit this file to version control.**

    ```env
    # .env

    # Neon PostgreSQL Connection String
    DATABASE_URL="postgresql://<user>:<password>@<host>:<port>/<dbname>?sslmode=require"

    # Better Auth Secret
    # Generate a secure random string (e.g., using `openssl rand -base64 32`)
    AUTH_SECRET="your-super-secret-string"

    # Frontend URL for CORS
    FRONTEND_URL="http://localhost:3000"
    ```

## Running the Backend

1.  **Start the development server**:
    ```bash
    npm run dev
    ```
    This will start the Express server, typically on a port like `3001` or as configured. The server will automatically restart when file changes are detected.

2.  **Verify the server is running**:
    You should see a log message in your terminal indicating that the server is listening for requests, e.g., `Server running on http://localhost:3001`.

## Integration with Frontend

The Docusaurus frontend will be configured to make API requests to the `auth-backend`. This is typically done by setting a proxy in the Docusaurus configuration or by using a full URL in the frontend API client, pointing to the backend server's address (`http://localhost:3001` in development).
