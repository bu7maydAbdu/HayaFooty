const express = require("express");
const ProfileSet = require("../models/ProfileSet");
const axios = require("axios");

const token = process.env.token;
const baseUrl = process.env.baseUrl;
const standingsUrl = `${baseUrl}/2000/standings`;
const teamsUrl = `${baseUrl}/teams`;
const matchesUrl = `${baseUrl}/matches`;

module.exports = {
  getProfile: async (req, res) => {
    try {
      const profileSettings = await ProfileSet.findOne({ user: req.user.id });
      const favArr = profileSettings.favoriteLeagues;
      for (let i = 0; i < favArr.length; i++) {}

      res.render("profile.ejs", { myProfileInfo: req.user });
      console.log(req.user);
    } catch (err) {
      console.log(err);
    }
  },
};
