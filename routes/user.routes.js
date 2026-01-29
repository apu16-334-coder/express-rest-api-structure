const express = require("express");
const router = express.Router();

const { getAllUsers, getUser, createUser, editUser, deleteUser } = require("../controllers/user.controller")

router.route("/")
    .get(getAllUsers)
    .post(createUser);

router.route("/:id")
    .get(getUser)
    .put(editUser)
    .delete(deleteUser);


module.exports = router;