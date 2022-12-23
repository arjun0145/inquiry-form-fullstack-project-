import StatusCodes from "http-status-codes";
import { UserSchema } from "../model/inquirymodel.js";


export async function Savedata(req, res) {
  try {
    const user = UserSchema(req.body);
    const s = await user.save();
    res.status(StatusCodes.OK).send("data saved successfully");
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "data not saved" });
  }
}

export async function Fetchdata(req, res) {

  try {
    const user = await UserSchema.find();
    res.status(StatusCodes.OK).json(user);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "data not saved" });
  }
}
