import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { BuildingService } from './building.service';

const insertIntoDb = catchAsync(async (req: Request, res: Response) => {
  const result = await BuildingService.insertIntoDb(req.body);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'building created successfully',
    data: result,
  });
});
export const buildingController = {
  insertIntoDb,
};
