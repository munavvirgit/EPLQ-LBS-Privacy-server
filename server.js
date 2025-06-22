import dotenv from "dotenv";
dotenv.config(); // 

import express from "express";
import userrouter from "./src/routes/routes.js";
import { databaseconnection } from "./src/config/db.js";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import "./src/auth/passport.js"; // 

const app = express();
const port = process.env.PORT || 5001;

databaseconnection();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());

app.use(session({
  secret: "secretkey",
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1", userrouter);

app.get("/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"], prompt: "select_account", }
   
  )
);

app.get("/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("http://localhost:5173/AdminPage");
  }
);

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
