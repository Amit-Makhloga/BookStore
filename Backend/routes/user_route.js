const express = require("express")
// const signup = require("../controller/user_controller")
// const login = require("../controller/user_controller")
const {signup, login} = require("../controller/user_controller")
const router = express.Router()

router.post("/signup", signup)
router.post("/login", login)


module.exports = router;