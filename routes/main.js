const express = require("express")
const router = express.Router()
const mainController = require("../controllers/mainController")
const accountController = require("../controllers/accountController")
const leaguesController = require("../controllers/leaguesController")



router.get("/", mainController.getHome)
router.get("/allLeagues", mainController.getAllLeagues)
router.get("/login", accountController.getLogin)
router.get("/signUpPage", accountController.getSignUpPage)
router.get("/:id" , leaguesController.getChampionsLeague )







module.exports = router