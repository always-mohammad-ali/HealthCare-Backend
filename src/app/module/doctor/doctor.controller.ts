import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { DoctorService } from "./doctor.service";
import status from "http-status";
import { sendResponse } from "../../shared/sendResponse";

const getAllDoctors = catchAsync(async (req: Request, res: Response) =>{


    const result = await DoctorService.getAllDoctors();

    sendResponse(res, {
        httpStatusCode: status.OK,
        success: true,
        message: "all doctors data found successfully",
        data: result
    })
})

export const DoctorController = {
    getAllDoctors,

}