const express =  require("express")
const axios = require("axios")

const token = process.env.token
const baseUrl = process.env.baseUrl
const standingsUrl = `${baseUrl}/2000/standings`
const teamsUrl = `${baseUrl}/teams`
const matchesUrl = `${baseUrl}/matches`
const scorersUrl = `${baseUrl}/scorers`


module.exports = {


    getLeague : async (req, res) => {
        try{

            const standing = await axios.get(`${baseUrl}/${req.params.id}/standings`,{
                headers: {
                    "X-Auth-Token" : token
                }
            })
            const teamsData = await axios.get(`${baseUrl}/${req.params.id}/teams`,{
                headers: {
                    "X-Auth-Token" : token
                }
            })

             const fixures = await axios.get(`${baseUrl}/${req.params.id}/matches`,{
                headers: {
                    "X-Auth-Token" : token
                }
            })

            const topScorersData = await axios.get(`${baseUrl}/${req.params.id}/scorers`,{
                headers: {
                    "X-Auth-Token" : token
                }
            })
        

            const currentMatchesSearch = await fixures.data.matches.filter(item => item.matchday === teamsData.data.season.currentMatchday)

            console.log(standing.data)

            res.render("league.ejs", {standing :standing.data.standings[0].table, leagueData : standing.data , fixures : currentMatchesSearch, playersStats : topScorersData.data.scorers})

        }catch(err){
            console.log(err)
        }
    },
    getChampionsLeague : async(req, res) => {
        try{
            const standing = await axios.get(`${baseUrl}/2001/standings`,{
                headers: {
                    "X-Auth-Token" : token
                }
            })

            const teamsData = await axios.get(`${baseUrl}/${req.params.id}/teams`,{
                headers: {
                    "X-Auth-Token" : token
                }
            })

             const fixures = await axios.get(`${baseUrl}/${req.params.id}/matches`,{
                headers: {
                    "X-Auth-Token" : token
                }
            })

            const topScorersData = await axios.get(`${baseUrl}/${req.params.id}/scorers`,{
                headers: {
                    "X-Auth-Token" : token
                }
            })
        

            const currentMatchesSearch = await fixures.data.matches.filter(item => item.matchday === teamsData.data.season.currentMatchday)
                // for(let i =0 ; i < standing.data.standings[i].table.length ; i++){
                //     console.table(standing.data.standings[i].table)
                // }
            // console.log(standing.data.standings[0].table)
            // console.log(standing.data.standings)
            console.log(fixures.data.matches)

       res.render("cl.ejs" , {standing :standing.data.standings, leagueData : standing.data , fixures : currentMatchesSearch, playersStats : topScorersData.data.scorers})

        }catch(err){
            console.log(err)
        }
    }



}