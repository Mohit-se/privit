const { Sequelize } = require('sequelize');
const db = require('../db/db');
const bcrypt = require("bcrypt");
const Users = db.users;

module.exports = {

    //Dashboard
    index: async (req, res) => {
        res.render("index")
    },

   //======================================Start Personal Info Page===================================================================//

   personalInfo: async (req, res) => {
        res.render("personal-info")
   },

   //======================================End Personal Info Page===================================================================//
    
  //=======================================Start Registration form new entries========================================================//
    registrations: async (req, res) => {
        const name = req.body.name;
        const email = req.body.email;
        const address = req.body.address;
        const number = req.body.number;
        const password = req.body.password;
        
        //Hashing password
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        try{
           let data = await Users.create({
              name:name,
              email:email,
              address:address,
              number:number,
              password:hash,
           });

           if(!data) throw new Error("User registration failed");
           return res.json({status:true, message: 'User registration successfuly', show:"otp"});
           
        }catch(error){
            return res.json({status:false, message:"Somthing went wrong"});
        }
    },

//=======================================End Registration form new entries========================================================//

//=======================================Start Login User Here===================================================================//
    login: async (req, res) => {
        const email = req.body.loginEmail;
        const password = req.body.loginPassword;

        try{
            var results = await Users.findOne({where:{email:email}});
           if(!results) throw new Error("User not found");
           var checkuserPassword = await bcrypt.compare(password,results.password);
           if(!checkuserPassword) throw new Error("Invalid Passowrd!");
           return res.json({status:true, message: 'User Logged In successfuly', url:"personal-info"});
        }catch(error){
            return res.json({status:false, message:"Credential not matched"});
        }

    }
//=======================================End Login User Here===================================================================//

} 
