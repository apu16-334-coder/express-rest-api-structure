const Users = require("../models/user.model")
const AppError = require("../utils/AppError")

/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 * @typedef {(req: Request, res: Response)=> void} Controller
 */

/** @type {Controller} */
// create user
const createUser = async (req, res, next) => {
    try {
        const user = await Users.create(req.body);
        res.status(201).json({
            success: true,
            data: user
        })
    } catch (error) {
        next(error)
    }
}

/** @type {Controller} */
// get all users
const getAllUsers = async (req, res, next) => {
    try {
        const allUsers = await Users.find()

        res.status(200).json({
            success: true,
            data: allUsers
        })
    } catch (error) {
        next(error)
    }
}

/** @type {Controller} */
// get user
const getUser = async (req, res, next) => {
    try {
        const user = await Users.findById(req.params.id)

        if (!user) {
            return next(new AppError(404, "User not Found"))
        }

        res.status(200).json({
            success: true,
            data: user
        })
    } catch (error) {
        next(error)
    }
}

/** @type {Controller} */
// Edit User
const editUser = async (req, res, next) => {
    try {
        const user = await Users.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!user) {
            return next(new AppError(404, "User not Found"))
        }

        res.status(200).json({
            success: true,
            data: user
        })
    } catch (error) {
        next(error)
    }
}

/** @type {Controller} */
// delete User
const deleteUser = async (req, res, next) => {
    try {
        const user = await Users.findByIdAndDelete(req.params.id);

        if (!user) {
            return next(new AppError(404, "User not Found"))
        }

        console.log('data', user)

        res.status(200).json({
             success: true, 
             message: 'User deleted'
        });
    } catch (error) {
        next(error)
    }
}

module.exports = { getAllUsers, createUser, getUser, editUser, deleteUser }