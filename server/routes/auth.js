import passport from "passport";
import { storage } from "../storage.js";
import { hashPassword } from "../auth.js";
import { insertUserSchema } from "../../shared/schema.js";

export function registerAuthRoutes(app) {
  // Signup route
  app.post("/api/auth/signup", async (req, res) => {
    try {
      const validatedData = insertUserSchema.parse(req.body);
      const { username, password } = validatedData;

      // Check if user already exists
      const existingUser = await storage.getUserByUsername(username);
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
      }

      // Hash password and create user
      const hashedPassword = await hashPassword(password);
      const user = await storage.createUser({
        username,
        password: hashedPassword,
      });

      // Auto-login after signup
      req.login(user, (err) => {
        if (err) {
          return res.status(500).json({ message: "Error logging in after signup" });
        }
        return res.status(201).json({
          message: "User created successfully",
          user: { id: user.id, username: user.username },
        });
      });
    } catch (error) {
      if (error.name === "ZodError") {
        return res.status(400).json({ message: "Invalid input", errors: error.errors });
      }
      return res.status(500).json({ message: "Error creating user" });
    }
  });

  // Login route
  app.post(
    "/api/auth/login",
    passport.authenticate("local", {
      failureMessage: true,
    }),
    (req, res) => {
      res.json({
        message: "Login successful",
        user: { id: req.user?.id, username: req.user?.username },
      });
    }
  );

  // Logout route
  app.post("/api/auth/logout", (req, res) => {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ message: "Error logging out" });
      }
      req.session.destroy((err) => {
        if (err) {
          return res.status(500).json({ message: "Error destroying session" });
        }
        res.clearCookie("connect.sid");
        res.json({ message: "Logout successful" });
      });
    });
  });

  // Get current user route
  app.get("/api/auth/me", (req, res) => {
    if (req.isAuthenticated() && req.user) {
      const user = req.user;
      return res.json({
        user: { id: user.id, username: user.username },
      });
    }
    return res.status(401).json({ message: "Not authenticated" });
  });
}
