

const {getUsers, addUser,addFixPoint} = require("../controllers/user")
const express = require("express")
const router = express.Router()

router.post("/Autentication",getUsers)

router.post("/Register",addUser)

router.post("/NewRequest",addFixPoint)
module.exports = router;