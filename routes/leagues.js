const express = require("express")
const router = express.Router()
const leaguesController = require("../controllers/leaguesController")



router.get("/:id" , leaguesController.getLeague )





module.exports = router