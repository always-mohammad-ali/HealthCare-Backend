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

const getDoctorById = catchAsync(async (req: Request, res: Response) =>{
   
    const {id}= req.params;

    const result = await DoctorService.getDoctorById(id as string);

    sendResponse(res, {
        httpStatusCode: status.OK,
        success: true,
        message: "get single doctor data found successfully",
        data: result
    })
})

const updateDoctor = catchAsync(async (req: Request, res: Response) =>{
   
    const {id}= req.params;
    const payload = req.body;

    const result = await DoctorService.updateDoctor(id as string, payload);

    sendResponse(res, {
        httpStatusCode: status.OK,
        success: true,
        message: "UPDATE single doctor data successfully",
        data: result
    })
})

export const DoctorController = {
    getAllDoctors,
    getDoctorById,
    updateDoctor

}