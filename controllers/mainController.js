const express =  require("express")
const axios = require("axios")


const token = process.env.token
const baseUrl = process.env.baseUrl
const standingsUrl = `${baseUrl}/2000/standings`
const teamsUrl = `${baseUrl}/teams`
const matchesUrl = `${baseUrl}/matches`

module.exports = {
    getHome : async (req, res) => {

        try{

           const competitons = await axios.get(baseUrl,{
                headers: {
                    "X-Auth-Token" : token
                }
            })

           console.log(competitons.data.competitions[0])
                     
        
            res.render("index.ejs")
        }catch(err){
            console.log(err)
        }
      }, 
      getAllLeagues : async (req, res) => {
        try{
                 const competitions = await axios.get(baseUrl,{
                headers: {
                    "X-Auth-Token" : token
                }
            })

           console.log(competitions.data.competitions)

            res.render("allLeagues.ejs" , {competitions : competitions.data.competitions})

        }catch(err){
            console.log(err)
        }
      }


    }