const {Router} = require("express")
const {login, logout, signup} = require("../controllers/user.controler")
const {authenticator} = require("../middlewares/auth")

const userRouter = Router()

userRouter.post("/signup", signup)
userRouter.post("/login", login)
userRouter.post("/logout",authenticator, logout)

module.exports = {userRouter}