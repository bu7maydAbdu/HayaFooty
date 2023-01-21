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


            res.render("allLeagues.ejs")

        }catch(err){
            console.log(err)
        }
      }


    }