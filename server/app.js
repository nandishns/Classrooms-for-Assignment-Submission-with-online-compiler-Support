const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
const jwt = require("jsonwebtoken");
app.use(cors());
const bcrypt = require("bcryptjs");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));


const mongoUrl =
  "mongodb+srv://nandish_n_s:Nasa4213@cluster0.spvki68.mongodb.net/nmn_classroom?retryWrites=true&w=majority";
  const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";
  mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
  })

.then(() => {
    console.log("Connected to database");
  })
.catch((e) => console.log(e));

require("./userDetails");


const User = mongoose.model("UserInfo");
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Exists" });
    }
    await User.create({
      name,
      
      email,
      password: encryptedPassword,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ error: "User Not found" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET);

    if (res.status(201)) {


      return res.json({ status: "ok", data: user });
      


    } else {
      return res.json({ error: "error" });
    }
  }
  res.json({ status: "error", error: "Invalid Password" });
});

app.post("/userData", async (req, res) => {
  const { token } = req.body;
  try {
    const user = jwt.verify(token, JWT_SECRET);
    console.log(user);

    const useremail = user.email;
    User.findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {} 
});



require("./classDetails");


const Class = mongoose.model("ClassInfo");

app.post("/class", function(req,res){
    const { classname, section, subject } = req.body;
    try {

     Class.create({
        classname,
        
        section,
        subject,
      });
      res.send({ status: "ok" });
    } catch (error) {
      res.send({ status: "error" });
    }
});
app.listen(5000,()=>{
    console.log("server started");
});