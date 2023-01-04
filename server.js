const express = require("express")
const PORT = 8000
const app = express()







app.listen(process.env.PORT || PORT , () => {
    console.log(`server is running on port ${PORT}`)
})




