import { NextFunction, Request, Response, Router } from "express";
import { UserController } from "./user.controller";
import z from "zod";
import { Gender } from "../../../generated/prisma/enums";
import { validateRequest } from "../../middleware/validateRequest";
import { createDoctorZodSchema } from "./user.validation";


    

const router = Router();



router.post('/create-doctor', 
    
    /*(req: Request, res: Response, next: NextFunction) =>{

   // console.log("-----------before zod validation----------", req.body);

    const parsedResult = createDoctorZodSchema.safeParse(req.body);

    if(!parsedResult.success){
      //  console.log("-----------zod error--------------", parsedResult.error);
        next(parsedResult.error)
    }

    req.body = parsedResult.data;
   // console.log( "---------after zod validation-----------", req.body);
    
    next();
    
  
}*/
validateRequest(createDoctorZodSchema)

, UserController.createDoctor)

export const UserRoutes = router;