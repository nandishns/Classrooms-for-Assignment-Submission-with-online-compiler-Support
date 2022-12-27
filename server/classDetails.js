const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    classname: String,
    
    section: String,
    subject: String,
  },
  {
    collection: "ClassInfo",
  }
);

mongoose.model("ClassInfo", UserDetailsScehma);