import express, { Request, Response } from "express";

import cors from "cors";
import { router } from "./app/routes";

import { globalErrorhandler } from "./app/middlewares/globalErrorHandler";

const app = express();
app.use(express.json());
app.use(cors());


app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Welcome too Tour Management System Backend"
    })
});

app.use(globalErrorhandler);

export default app;