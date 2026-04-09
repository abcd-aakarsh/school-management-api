import e from "express";
import { addSchool, listSchools } from "../controllers/school.controller.js";
import { validate } from "../middlewares/validate.js";
import {
  addSchoolSchema,
  listSchoolsSchema,
} from "../validators/school.validator.js";
const router = e.Router();

router.post("/addSchool", validate(addSchoolSchema), addSchool);
router.get("/listSchools", validate(listSchoolsSchema, "query"), listSchools);
export default router;
