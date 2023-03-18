const express = require("express")
const router = express.Router()
const leaguesController = require("../controllers/leaguesController")



router.get("/:id" , leaguesController.getLeague )
router.post("/createFavoritesList", leaguesController.createFavoritesList)
router.post("/addToFavorites/:id", leaguesController.addToFavorites)






module.exports = router