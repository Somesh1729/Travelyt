# Database Setup Guide

This project uses PostgreSQL to store user data and sessions.

## Prerequisites

1. PostgreSQL installed and running
2. A PostgreSQL database created

## Setup Steps

### 1. Create a PostgreSQL Database

```sql
CREATE DATABASE your_database_name;
```

### 2. Set Environment Variable

The project uses `dotenv` to load environment variables from a `.env` file. 

**Option 1: Create/Edit `.env` file** (Recommended)

Create or edit the `.env` file in the root directory:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/your_database_name
SESSION_SECRET=your-secret-key-change-in-production
PORT=5000
NODE_ENV=development
```

**Format:** `postgresql://[user]:[password]@[host]:[port]/[database]`

**Option 2: Set environment variable directly**

On Windows PowerShell:
```powershell
$env:DATABASE_URL="postgresql://username:password@localhost:5432/your_database_name"
```

On Linux/Mac:
```bash
export DATABASE_URL="postgresql://username:password@localhost:5432/your_database_name"
```

### 3. Run Database Migrations

Push the schema to your database:

```bash
npm run db:push
```

This will create the `users` table in your database.

### 4. Verify Setup

The session table will be created automatically when you start the server (if using PostgreSQL session store).

## Database Schema

### Users Table
- `id` (varchar, primary key, UUID)
- `username` (text, unique, not null)
- `password` (text, not null, hashed with bcrypt)

### Session Table (auto-created)
- Managed by `connect-pg-simple` for storing user sessions

## Testing the Connection

When you start the server with `npm run dev`, you should see:
- "Database connected successfully" message
- Users will be stored in PostgreSQL instead of memory
- Sessions will persist across server restarts

## Troubleshooting

1. **Connection Error**: Make sure PostgreSQL is running and DATABASE_URL is correct
2. **Table Not Found**: Run `npm run db:push` to create tables
3. **Permission Error**: Ensure your database user has CREATE TABLE permissions
