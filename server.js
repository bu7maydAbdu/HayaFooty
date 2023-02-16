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
 



// Sessions
// app.use(
//     session({
//       secret: 'keyboard cat',
//       resave: false,
//       saveUninitialized: false,
//       store: MongoStore.create({mongoUrl:process.env.DB_STRING})
//     })
//   )
  


// Passport middleware
// app.use(passport.initialize())
// app.use(passport.session())

// app.use(flash())



app.use("/", mainRoute)
app.use("/leagues", leaguesRoute)





app.listen(process.env.PORT || PORT , () => {
    console.log(`server is running on port ${PORT}`)
})




