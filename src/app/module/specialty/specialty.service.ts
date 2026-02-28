import { Specialty } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createSpecialties = async(payload : Specialty): Promise<Specialty> =>{
        const specialty = await prisma.specialty.create({
        data: payload
    })
    return specialty;
}

const getAllSpecialties = async(): Promise<Specialty[]> =>{
         const specialties = await prisma.specialty.findMany();

         return specialties;
}

const deleteSpecialty = async(id: string): Promise<Specialty> =>{
    const specialty = await prisma.specialty.delete({
        where: {id}
    });

    return specialty;
}

const updateSpecialty = async(id: string, payload: Specialty): Promise<Specialty> =>{
    const updatedSpecialty = await prisma.specialty.update({
        where: {id},
        data: payload
    })
     return updatedSpecialty;
}


export const SpecialtyService = {
    createSpecialties,
    getAllSpecialties,
    deleteSpecialty,
    updateSpecialty
}