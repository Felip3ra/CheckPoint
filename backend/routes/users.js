

const {getUsers, addUser} = require("../controllers/user")
const {AddPoint, GetPoint} = require("../controllers/point")
const {addFixPoint} = require("../controllers/fixPoint")
const express = require("express")
const router = express.Router()

router.post("/Autentication",getUsers)

router.post("/Register",addUser)

router.post("/NewRequest",addFixPoint)

router.post("/Point",AddPoint)

router.get("/GetPoint/:id",GetPoint)
module.exports = router;