/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
// import { User } from "./user.model";
import httpStatus from "http-status-codes"
import { UserServices } from "./user.service";
import AppError from "../../errorHelpers/AppError";
import { catchAsync } from "../../utils/catchAsync";
import { success } from "zod";
import { sendResponse } from "../../utils/sendResponse";



const createUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const user = await UserServices.createUser(req.body)

    // res.status(httpStatus.CREATED).json({
    //     message: "User created successfully",
    //     user
    // })

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "User created successfully",
        data: user,
    });
})


const getAllUsers = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await UserServices.getAllUsers();
    // res.status(httpStatus.OK).json({
    //     success: true,
    //     message: "All users retrived successfully!",
    //     data: users,
    // });

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: "All users retrived successfully!",
        data: result.data,
        meta: result.meta
    });

})

export const UserControllers = {
    createUser,
    getAllUsers
}