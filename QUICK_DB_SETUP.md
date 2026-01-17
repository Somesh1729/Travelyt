# Quick Database Setup Fix

## The Problem
Your `.env` file has placeholder values. The error shows PostgreSQL is trying to authenticate with user "username" which doesn't exist.

## Solution

### Step 1: Find Your PostgreSQL Credentials

**Check your PostgreSQL username:**
- Default username is usually `postgres`
- Or check what users exist in PostgreSQL

**Find your PostgreSQL password:**
- This is the password you set when installing PostgreSQL
- Or check your PostgreSQL configuration

### Step 2: Create the Database (if it doesn't exist)

Open PostgreSQL command line or pgAdmin and run:

```sql
CREATE DATABASE users_databse;
```

Or use a different database name if you prefer.

### Step 3: Update .env File

Edit the `.env` file in the root directory and replace with your actual credentials:

```env
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD@localhost:5432/users_databse
```

**Replace:**
- `postgres` - Your PostgreSQL username (usually `postgres`)
- `YOUR_PASSWORD` - Your actual PostgreSQL password
- `users_databse` - Your database name (or create a new one)

### Step 4: Test the Connection

```bash
npm run db:push
```

If successful, you'll see the tables being created.

## Common Issues

1. **"password authentication failed"**
   - Wrong username or password in DATABASE_URL
   - Check your PostgreSQL credentials

2. **"database does not exist"**
   - Create the database first: `CREATE DATABASE your_database_name;`

3. **"connection refused"**
   - PostgreSQL service is not running
   - Start PostgreSQL service

## Example .env File

```env
DATABASE_URL=postgresql://postgres:mypassword123@localhost:5432/genie_convert_pro
SESSION_SECRET=change-this-to-a-random-string-in-production
PORT=5000
NODE_ENV=development
```
