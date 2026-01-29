const users = require("../data/users");

/**
 * @typedef {import('express').Request} Request
 * @typedef {import('express').Response} Response
 * @typedef {(req: Request, res: Response)=> void} Controller
 */

/** @type {Controller} */
// Get All Users
const getAllUsers = (req, res) => {
    res.status(200).json({
        success: true,
        data: users
    })
}

/** @type {Controller} */
// Get a Particular User
const getUser = (req, res) => {
    const id= Number(req.params.id)

    const user = users.find(us => us.id === id)

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User is Not Found"
        })
    }
    res.status(200).json({
        success: true,
        data: user
    })
}

/** @type {Controller} */
// Create a User
const createUser = (req, res) => {
    const { id, name } = req.body

    if (!name) {
        return res.status(400).json({
            success: false,
            message: "Name Is Required"
        })
    }

    const newUser = {
        id,
        name
    }

    users.push(newUser)

    res.status(201).json({
        success: true,
        data: newUser
    })
}

/** @type {Controller} */
// Edit A Particular User
const editUser = (req, res) => {
    const id = Number(req.params.id)
    const {name} = req.body
    const user = users.find(us => us.id === id)

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User Is Found"
        })
    }

    if (!name) {
        return res.status(400).json({
            success: false,
            message: "Name Is Required"
        })
    }

    user.name = name || user.name

    res.status(200).json({
        success: true,
        data: user
    })
}

/** @type {Controller} */
// Delete a Particular User
const deleteUser = (req, res)=>{
    const id = Number(req.params.id)
    const index = users.findIndex(us=> us.id === id)

    if(index === -1) {
        return res.status(404).json({
            success: false,
            message: "User Is Found"
        })
    }

    users.splice(index, 1)

    res.status(200).json({
        success: true,
        message: "successfully deleted"
    })    
}

module.exports = {getAllUsers, getUser, createUser, editUser, deleteUser}



