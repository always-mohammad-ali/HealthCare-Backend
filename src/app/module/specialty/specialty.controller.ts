import { NextFunction, Request, RequestHandler, Response } from "express";
import { SpecialtyService } from "./specialty.service";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";




const createSpecialties = catchAsync( async(req: Request, res: Response) =>{
    const payload = req.body;

    const result = await SpecialtyService.createSpecialties(payload)

    sendResponse(res, {
          httpStatusCode: 201,
          success: true,
          message: "api is working and specialty creation succeed",
          data: result
    } )
})



const getAllSpecialties = catchAsync( async(req: Request, res: Response) =>{
         const specialties = await SpecialtyService.getAllSpecialties();

         sendResponse(res, {
          httpStatusCode: 201,
          success: true,
            message: "getting all specialty data successfully done",
            data: specialties
    } )

})

const deleteSpecialty = catchAsync( async(req: Request, res: Response) =>{
    const { id } = req.params;

        const result = await SpecialtyService.deleteSpecialty(id as string);

        sendResponse(res, {
          httpStatusCode: 201,
          success: true,
          message: "deleted successfully done",
          data: result
    } )
})

const updateSpecialty = catchAsync( async(req: Request, res: Response) =>{
    const { id } = req.params;
        const payload = req.body;

        const result = await SpecialtyService.updateSpecialty(id as string, payload);

        sendResponse(res, {
          httpStatusCode: 201,
          success: true,
          message: "updated successfully done",
          data: result
    } )
})


export const SpecialtyController = {
    createSpecialties,
    getAllSpecialties,
    deleteSpecialty,
    updateSpecialty
}