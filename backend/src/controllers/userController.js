import { User } from "../models/users.js";

export const getUser = async (req, res, next) => {
  try {
    const {} = req.body;
    const user = await User.create({});
    res
      .status(200)
      .json({ success: true, message: `New user: ${user.name} created` });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
