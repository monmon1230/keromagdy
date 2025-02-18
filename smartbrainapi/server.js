import express from "express";
import bodyParser from "body-parser";
import bcrypt from 'bcrypt-nodejs';
import cors from "cors";
import knex from "knex";
import handelRegister from "./Controllers/register.js";
import handelSignin from "./Controllers/signin.js";
import handelProfileGet from "./Controllers/profile.js";
import { handelApicall, handelimage } from './Controllers/image.js';


 const  db= knex ({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'mina',
    password: '',
    database: 'smart-brain'
  },
});

  



const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors())
const database = {
  users: [
    {
      id: "123",
      name: "mina",
      email: "mina@gmail.com",
      password:'123456789',
      entries: "0",
      joined: new Date(),
    },
    {
      id: "124",
      name: "kero",
      email: "kero@gmail.com",
      password:'987654321',
      entries: "1",
      joined: new Date(),
    },
  ],
  login:[
    {
        id:"987",
        hash:'',
        email:'john@gmail.com'
    }
  ]
};

app.get("/", (req, res) => {
  res.send(database.users);
});

app.post("/signin", (req,res)=> {handelSignin(req,res,db,bcrypt)});
app.post("/register",(req,res)=>{handelRegister(req,res,db,bcrypt)});

app.get('/profile/:id',(req,res)=>{handelProfileGet(req,res,db)})




app.put('/image',(req,res)=>{handelimage(req,res,db)})
app.post('/image',(req,res)=>{handelApicall(req,res,db)})

app.listen(3005, () => {
  console.log("app is running on port 3005");
});
