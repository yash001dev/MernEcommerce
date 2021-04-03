const User = require("../models/user");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

//Register a user=>/api/v1/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "people/smiling-man.jpg",
      url:
        "https://res.cloudinary.com/bookon/image/upload/v1617427575/samples/people/smiling-man.jpg",
    },
  });

  const token = user.getJwtToken();

  res.status(200).json({
    success: true,
    token,
  });
});
