import { eq } from "drizzle-orm";
import { db } from "./db.js";
import { users } from "../shared/schema.js";

// Database storage implementation
export class DatabaseStorage {
  async getUser(id) {
    const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0];
  }

  async getUserByUsername(username) {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.username, username))
      .limit(1);
    return result[0];
  }

  async createUser(insertUser) {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }
}

// Use database storage instead of in-memory storage
export const storage = new DatabaseStorage();
