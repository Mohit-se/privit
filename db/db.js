const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize("privit", "root", "", {
   host: "localhost",
   dialect: "mysql",
   pool: {max:5, min:0, ideal:10000},
});

sequelize.authenticate().then(()=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log("Database Connection Failed "+err);
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models Ko import karte hai fir uske baad sync karte hai..
db.users = require('../models/users')(sequelize, DataTypes);
db.allergies = require('../models/allergies')(sequelize, DataTypes);
db.diets = require('../models/diets')(sequelize, DataTypes);
db.medicalconditions = require('../models/medicalconditions')(sequelize, DataTypes);
db.cuisinetype = require('../models/cuisinetype')(sequelize, DataTypes);
module.exports = db;

db.sequelize.sync({ force: false }).then(() => {
  console.log("Yes re-sync");
});
