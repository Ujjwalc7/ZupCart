import { User } from "../models/users.js";
import ErrorHandler from "../utils/utility-class.js";

export const adminOnly = async (req, res, next) => {
  try {
    const { id } = req.query;
    if (!id) return next(new ErrorHandler("User not logged in", 401));
    const user = await User.findById(id);
    if (!user) return next(new ErrorHandler("No user found", 404));
    if (user.role !== "admin")
      return next(new ErrorHandler("User not authorised", 403));
    next();
  } catch (error) {
    return next(error);
  }
};
