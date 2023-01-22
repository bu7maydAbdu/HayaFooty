const express = require("express")
const axios = require("axios")
const PORT = 8000
const app = express()
require('dotenv').config({path: './config/.env'})

const mainRoute = require("./routes/main")
const leaguesRoute = require("./routes/leagues")



app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(express.urlencoded({extended : true}))
app.use(express.json())
 

app.use("/", mainRoute)
app.use("/leagues", leaguesRoute)





app.listen(process.env.PORT || PORT , () => {
    console.log(`server is running on port ${PORT}`)
})




