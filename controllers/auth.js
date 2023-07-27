const { StatusCodes } = require("http-status-codes");
const User = require("../models/User");
const { BadRequestError } = require("../errors");

const register = async (req, res) => {
    const user = await User.create({ ...req.body });

    res.status(StatusCodes.CREATED).json({ user });
};

const login = (req, res) => {
    res.send("login user");
};

module.exports = {
    register,
    login,
};
