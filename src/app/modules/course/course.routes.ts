import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CourseController } from './course.controller';
import { CourseValidation } from './course.validation';
const router = express.Router();

router.post(
  '/',
  validateRequest(CourseValidation.create),
  CourseController.insertIntoDB
);

// router.get('/', CourseController.getAllFromDB);
// router.get('/:id', CourseController.getDataById);
// router.patch(
//   '/:id',
//   validateRequest(CourseValidation.update),
//   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
//   CourseController.updateOneInDB
// );

// router.delete(
//   '/:id',
//   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
//   CourseController.deleteByIdFromDB
// );
export const CourseRoutes = router;