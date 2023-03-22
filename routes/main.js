const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");
const accountController = require("../controllers/accountController");
const leaguesController = require("../controllers/leaguesController");
const authController = require("../controllers/auth.js");
const { ensureAuth, ensureGuest } = require("../middleware/auth.js");

const profileController = require("../controllers/profileController");

router.get("/profile", profileController.getProfile);
router.get("/", mainController.getHome);
router.get("/allLeagues", ensureAuth, mainController.getAllLeagues);
router.get("/loginPage", accountController.getLogin);
router.get("/signUpPage", accountController.getSignUpPage);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);
router.get("/logout", authController.logout);
router.get("/:id", leaguesController.getChampionsLeague);

module.exports = router;
