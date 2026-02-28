import { Router } from "express";
import { SpecialtyController } from "./specialty.controller";


const router = Router();

router.post('/', SpecialtyController.createSpecialties);
router.get('/', SpecialtyController.getAllSpecialties);
router.delete('/:id', SpecialtyController.deleteSpecialty);
router.put('/:id', SpecialtyController.updateSpecialty);

export const SpecialtyRoutes = router;