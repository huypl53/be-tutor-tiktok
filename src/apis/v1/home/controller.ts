import { NextFunction, Request, Response } from "express";

import { ApiResponse } from "utils/rest";
import * as service from "./service";

export const getHome = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await service.getHome();
  new ApiResponse(result).send(res);
};
