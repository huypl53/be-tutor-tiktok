import { HttpException, StatusCode } from "exceptions";
import { Request, NextFunction } from "express";

import { AccountsModel } from "models";
import { QUERY_DELETED, QUERY_IGNORE } from "utils/constants/query";

export const getAllUsers = async (next: NextFunction) => {
  try {
    const result = await AccountsModel.find({ ...QUERY_DELETED }).select(
      QUERY_IGNORE
    );

    return result;
  } catch (error) {
    next(error);
  }
};

export const searchAllUsers = async (req: Request, next: NextFunction) => {
  const { q, type } = req.query;
  try {
    if (type === "less") {
      const result = await AccountsModel.find({
        $text: {
          $search: String(q),
        },
        ...QUERY_DELETED,
      })
        .select(QUERY_IGNORE)
        .limit(5);

      return result;
    } else {
      return [];
    }
  } catch (error) {
    next(error);
  }
};

export const getUserinfo = async (req: Request, next: NextFunction) => {
  try {
    const _id = req.user.userID;

    const result = await AccountsModel.findOne({
      _id,
      ...QUERY_DELETED,
    }).select(QUERY_IGNORE);

    if (!result) {
      throw new HttpException(
        "ForbiddneError",
        StatusCode.BadRequest.status,
        "Your account has been deleted",
        "Banned",
        Date.now() - req.startTime
      );
    }

    return result;
  } catch (error) {
    next(error);
  }
};
