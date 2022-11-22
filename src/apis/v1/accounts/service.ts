import { Request, NextFunction } from "express";
import { usersValidate } from "Helpers/validation";
import { AccountsModel } from "models";
import { HttpException, StatusCode } from "exceptions";

const createAccount = async (req: Request, next: NextFunction) => {
  const { error } = usersValidate(req.body);
  const { username } = req.body;

  try {
    if (error)
      throw new HttpException(
        "ValidateError",
        StatusCode.BadRequest.status,
        error.details[0].message,
        StatusCode.BadRequest.name
      );
    const isExists = await AccountsModel.findOne({
      username,
    });

    if (isExists) {
      return next(
        new HttpException(
          "CreateError",
          StatusCode.BadRequest.status,
          "Username is aready",
          StatusCode.BadRequest.name
        )
      );
    }

    const accounts = new AccountsModel(req.body);
    const result = await accounts.save();
    return result;
  } catch (error) {
    next(error);
  }
};

const updateAccounts = async (req: Request, next: NextFunction) => {
  const { error } = usersValidate(req.body);
  const { fullname, nickname, avatar, bio, website_url, social_network } =
    req.body;
  const { username } = req.params;

  try {
    if (error)
      throw new HttpException(
        "ValidateError",
        StatusCode.BadRequest.status,
        error.details[0].message,
        StatusCode.BadRequest.name
      );

    const result = await AccountsModel.findOneAndUpdate({});
  } catch (error) {
    console.debug(error);
  }
};

export { createAccount, updateAccounts };
