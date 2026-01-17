import { storage } from "./storage.js";
import { registerAuthRoutes } from "./routes/auth.js";

export async function registerRoutes(httpServer, app) {
  // put application routes here
  // prefix all routes with /api

  // Register authentication routes
  registerAuthRoutes(app);

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  return httpServer;
}
