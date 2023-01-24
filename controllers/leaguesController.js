const express =  require("express")
const axios = require("axios")

const token = process.env.token
const baseUrl = process.env.baseUrl
const standingsUrl = `${baseUrl}/2000/standings`
const teamsUrl = `${baseUrl}/teams`
const matchesUrl = `${baseUrl}/matches`

module.exports = {


    getLeague : async (req, res) => {
        try{

            const standing = await axios.get(`${baseUrl}/${req.params.id}/standings`,{
                headers: {
                    "X-Auth-Token" : token
                }
            })

            console.log(standing.data)

            res.render("league.ejs", {standing :standing.data.standings[0].table, leagueData : standing.data})

        }catch(err){
            console.log(err)
        }
    }



}