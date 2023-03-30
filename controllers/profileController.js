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
      let favArrStaged = [];
      let favLeagueScorers = [];
      for (let i = 0; i < favArr.length; i++) {
        const standing = await axios.get(`${baseUrl}/${favArr[i]}/standings`, {
          headers: {
            "X-Auth-Token": token,
          },
        });
        const topScorersData = await axios.get(
          `${baseUrl}/${favArr[i]}/scorers`,
          {
            headers: {
              "X-Auth-Token": token,
            },
          }
        );
        favArrStaged.push(standing.data);
        favLeagueScorers.push(topScorersData.data.scorers);
        // console.log(standing.data.standings[0].table[0]);
      }

      console.log(favLeagueScorers[0][0]);

      res.render("profile.ejs", {
        myProfileInfo: req.user,
        MyFavLeagues: favArrStaged,
        topScorers: favLeagueScorers,
      });
      console.log(req.user);
    } catch (err) {
      console.log(err);
    }
  },
};
