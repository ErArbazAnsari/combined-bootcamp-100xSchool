import express from "express";
import "dotenv/config";

import authRoutes from "./routes/auth.routes.js";
import orgsRoutes from "./routes/orgs.routes.js";
import boardsRoutes from "./routes/boards.router.js";
import issuesRoutes from "./routes/issues.routes.js";

const app = express();
const PORT = process.env.PORT;

// middlewares
app.use(express.json());

// routes
app.get("/", (_, res) => res.send("server is running"));
app.use("/auth", authRoutes);
app.use("/organizations", orgsRoutes);
app.use("/boards", boardsRoutes);
app.use("/issues", issuesRoutes);

app.listen(PORT, () => console.log(`server is running on PORT:${PORT}`));
