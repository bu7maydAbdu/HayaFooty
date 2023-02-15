const express = require("express")



module.exports = {


    getLogin : async(req, res) => {
        try{
            res.render("login.ejs")
        }catch(err){
            console.log(err)
        }
    },
    getSignUpPage : async (req, res) => {
         try{

           
          res.render("signup.ejs")

         }catch(err){
          console.log(err)
         }
    }
}