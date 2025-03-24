

const {getUsers, addUser} = require("../controllers/user")
const express = require("express")
const router = express.Router()

router.get("/user",getUsers)

router.post("/Register",addUser)
module.exports = router;