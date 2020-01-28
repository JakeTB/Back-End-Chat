const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/chat-client")

mongoose.connection.once("open",function(){
console.log("MongoDB Connection has been made")
}).on("error",function(error){
    console.log("Connection error", error)
})