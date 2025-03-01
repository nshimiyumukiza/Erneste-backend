import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; 
import cors from "cors";
import router from "./routers/userRouter.js";
import imageRouter from "./routers/image.router.js";
import commentRouter from "./routers/commentRounter.js";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";

// Load environment variables
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const db = process.env.DB;

// Read the swagger_output.json file
const swaggerOutput = JSON.parse(fs.readFileSync(path.resolve("documentation/swagger_output.json"), "utf8"));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// Routes
app.use("/users", router);
app.use("/image", imageRouter);
app.use("/comment", commentRouter);

// Swagger Documentatiwh it is goood on
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

mongoose.connect(db)
    .then(() => console.log("Connected to the database"))
    .catch((err) => console.error(`Database connection error: ${err}`));
