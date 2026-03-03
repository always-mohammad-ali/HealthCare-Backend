import { Doctor } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma"
import { ICreateDoctorPayload } from "./doctor.interface";

const getAllDoctors = async() =>{
    const doctors = await prisma.doctor.findMany({
        include:{
            user:true,
            specialties:{
                include:{
                    specialty:true
                }
            }
        }
    })
    return doctors;
}

const getDoctorById = async(id : string) =>{
    const doctor = await prisma.doctor.findUnique({
        where:{
            id: id
        }
        
    })

    return doctor;
}

const updateDoctor = async(id : string, payload : Doctor) : Promise<Doctor> =>{
    const {name, profilePhoto, contactNumber, address, experience} = payload;

    const updatedDoctor = await prisma.doctor.update({
      where:{id},
      data: payload
    })
   
    return updatedDoctor;
}

export const DoctorService = {
    getAllDoctors,
    getDoctorById,
    updateDoctor

}