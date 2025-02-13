import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; 
import cors from "cors";
import router from "./routers/userRouter.js";
import imageRouter from "./routers/image.router.js";
import commentRouter from "./routers/commentRounter.js";
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./documentation/swagger_output.json" assert { type: "json" };

// Load environment variables
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
const db = process.env.DB;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// Routes
app.use("/users", router);
app.use("/image", imageRouter);
app.use("/comment", commentRouter);

// Swagger Documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

mongoose.connect(db)
    .then(() => console.log("Connected to the database"))
    .catch((err) => console.error(`Database connection error: ${err}`));
