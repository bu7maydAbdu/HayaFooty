const express = require("express")
const router = express.Router()
const mainController = require("../controllers/mainController")
const accountController = require("../controllers/accountController")


router.get("/", mainController.getHome)
router.get("/allLeagues", mainController.getAllLeagues)
router.get("/login", accountController.getLogin)
router.get("/signUpPage", accountController.getSignUpPage)






module.exports = router