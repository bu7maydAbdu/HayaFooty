const express = require("express");

module.exports = {
  getProfile: async (req, res) => {
    try {
      res.render("profile.ejs", { myProfileInfo: req.user });
      console.log(req.user);
    } catch (err) {
      console.log(err);
    }
  },
};
