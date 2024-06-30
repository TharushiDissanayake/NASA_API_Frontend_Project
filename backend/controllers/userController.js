const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@desc Register a users
//@route POST /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password ) {
        res.status(400);
        throw new Error("All fields are mandotary");
    }
    
    const userAvailable = await User.findOne({ email: email });
    if (userAvailable) {
      return res.status(400).json({ error: "User already registered!" });
    }

    //Hash Password
    const hashPassword = await bcrypt.hash(password, 10);
    console.log("hash Password", hashPassword);
    const user = await User.create({
        userName,
        email,
        password: hashPassword,
    });
    console.log(`User created ${user}`);

    if (user) {
        res.status(201).json({ _id: user._id, email: user.email });
      } else {
        res.status(400).json({ error: "User data is not valid" });
      }
      
    res.json({message: "Register the user"});
});

//@desc Login users
//@route POST /api/users/login
//@access public
const loginUser = asyncHandler(async (req, res) => {
    const { userName, password } = req.body;

  if (userName === null || password === null) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const user = await User.findOne({ userName });

    //compare password with hashpassword
  if (user) {
    let passwordMatch;
    await bcrypt
      .compare(password, user.password)
      .then((res) => {
        passwordMatch = res;
      })
      .catch((err) => console.error(err.message));

    if (passwordMatch) {
      const accessToken = jwt.sign(
        {
          user: {
              userName: user.userName,
              email: user.email,
              id: user._id,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "15h" }
      );
      res.status(200).json({ accessToken });
    } else {
      res.status(401);
    throw new Error("Unauthorized");
    }
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
    
});

//@desc Current users Info
//@route GET /api/users/current
//@access private
const currentUser = asyncHandler(async (req, res) => {
    res.json(req.user);
});

module.exports = {registerUser, loginUser, currentUser}