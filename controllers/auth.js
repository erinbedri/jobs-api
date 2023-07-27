const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    const user = await User.create({ ...req.body });
    const token = jwt.sign({ userId: user._id, name: user.name }, "JWTSecret", { expiresIn: "30d" });

    res.status(StatusCodes.CREATED).json({ name: user.name, token });
};

const login = (req, res) => {
    res.send("login user");
};

module.exports = {
    register,
    login,
};
