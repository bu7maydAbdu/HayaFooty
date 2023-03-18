const mongoose = require("mongoose")

const profileSetSchema = new mongoose.Schema({
 
    favoriteLeagues:{
       type : Array
    },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
    
  });

module.exports = mongoose.model("ProfileSet", profileSetSchema)