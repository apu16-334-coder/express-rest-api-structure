const users = require("../models/user.model")

/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 * @typedef {(req: Request, res: Response)=> void} Controller
 */

/** @type {Controller} */
// create user
const createUser = async(req, res , next)=>{
    try {
        const user = await users.create(req.body);
        res.status(201).json({
            success: true,
            data: user
        })
    } catch (error) {
        next(error)
    }
}

/** @type {Controller} */
// create user
const getAllUsers = async(req, res , next)=>{
    try {
        const allUsers = await users.find()

        res.status(200).json({
            success: true,
            data: allUsers
        })
    } catch (error) {
        next(error)
    }
}

module.exports ={getAllUsers, createUser}