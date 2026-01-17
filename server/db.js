import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "../shared/schema.js";

// Check for DATABASE_URL
if (!process.env.DATABASE_URL) {
  console.warn(
    "⚠️  DATABASE_URL not set. Please set it in your environment variables or .env file."
  );
  console.warn("   Example: DATABASE_URL=postgresql://user:password@localhost:5432/dbname");
}

// Create PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Create Drizzle database instance
export const db = drizzle(pool, { schema });

// Test database connection
pool.on("connect", () => {
  console.log("Database connected successfully");
});

pool.on("error", (err) => {
  console.error("Unexpected error on idle client", err);
  process.exit(-1);
});

// Export pool for session store
export { pool };
