import express, { Application, NextFunction, Request, Response } from "express"
import { prisma } from "./app/lib/prisma";
import { IndexRoutes } from "./app/route";
import { success } from "better-auth";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import { notFound } from "./app/middleware/notFound";
import AppError from "./app/errorHelpers/AppError";
import status from "http-status";

const app: Application = express();
const port = 5000; // The port your express server will be running on.

// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());


app.use('/api/v1/', IndexRoutes);

// Basic route
app.get('/', async(req: Request, res: Response) => {
  throw new AppError(status.BAD_REQUEST, "just for testing purpose");
    const specialty = await prisma.specialty.create({
        data: {
            title: "cardiology"
        }
    })
  res.status(201).json({
    success : true,
    message: "API is working",
    data: specialty
  })
});

app.use(globalErrorHandler);
app.use(notFound)


export default app;
