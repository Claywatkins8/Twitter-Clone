import express from "express";
import prisma from "@prisma/client";
import { ApolloServer } from "apollo-server";
import { typeDefs, resolvers } from "./schema.js";
import cors from "cors";
import path from "path";
/* routes */
import { register, login, logout } from "./controllers/auth.js";
import userRoutes from "./controllers/users.js";
import tweetRoutes from "./controllers/tweets.js";
import commentRoutes from "./controllers/comments.js";
import likeRoutes from "./controllers/likes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

// import { protect } from "./middleware/authRequired.js";

/* Instanced Modules */
const app = express();

const db = new prisma.PrismaClient({
  log: ["info", "warn"],
  errorFormat: "pretty",
});
/* Config */
const PORT = process.env.PORT || 4000;

/* Middleware */
app.use(express.json());
app.use(cors());

/* routes */
app.use("/api/users", userRoutes);
app.use("/api/tweets", tweetRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/upload", uploadRoutes);

/* FIXME: */
app.use("/api/logout", logout);

app.get("/", function (request, response) {
  response.send("Welcome to SQL");
});

// import module doesn't work with __dir
const __dirname = path.resolve();
// makes the uploads folder accessible
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

const server = new ApolloServer({
  resolvers,
  typeDefs,
});
server.listen({ port: 4025 }).then(() => {
  console.log(`
  Server is running!
  listening on port 4025
  http://localhost:4025
  studio.apollographql.com/dev
  `);
});

/* Sever Listener */

app.listen(PORT, function () {
  console.log(`Server is live on ${PORT}`);
});
