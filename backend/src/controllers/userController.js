import { User } from "../models/users.js";
import ErrorHandler from "../utils/utility-class.js";

export const newUser = async (req, res, next) => {
  try {
    const { name, email, photo, gender, role, _id, dob } = req.body;

    let user = await User.findById(_id);
    console.log(user.age);

    if (user) {
      return res
        .status(200)
        .json({ success: true, message: `Welcome back ${user.name}` });
    }

    if (!name || !email || !photo || !gender || !_id || !dob) {
      throw new ErrorHandler("Fill all the fields", 400);
    }

    user = await User.create({
      name,
      email,
      photo,
      gender,
      role,
      _id,
      dob,
    });
    return res
      .status(201)
      .json({ success: true, message: `New user: ${user.name} created` });
  } catch (error) {
    if (error.message === "Email Already Exist") {
      return next(new ErrorHandler(error.message, 400));
    }
    return next(error);
  }
};

export const getAllUser = async (req, res, next) => {
  try {
    const users = await User.find({});
    return res.status(200).json({ success: true, users: users });
  } catch (error) {
    return next(error);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const _id = req.params.id;
    if (!_id) throw new ErrorHandler("No ID Found", 400);
    const user = await User.findById(_id);
    if (user) {
      return res.status(200).json({ success: true, user });
    } else {
      throw new ErrorHandler("Invalid ID", 400);
    }
  } catch (error) {
    return next(error);
  }
};

export const deleteUserById = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const user = await User.findById(_id);
    if (!user) {
      throw new ErrorHandler("Invalid ID", 400);
    }
    await User.deleteOne({ _id });
    return res.status(200).json({
      succes: true,
      message: "User Deleted Succesfully",
    });
  } catch (error) {
    return next(error);
  }
};
