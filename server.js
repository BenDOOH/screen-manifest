const express = require("express");
const app = express();
const db = require('./models/index');

const Sequelize = require('sequelize');
const sequelize = new Sequelize("database_development","postgres","password",{dialect:"postgres"}); //password and username for database

app.set("view engine", "pug");
app.use(express.static("public")); //allows which folders are allowed to be used, middleware

// var screen1 = [];
// var screen2 = [];
// var screen3 = [];
// var screen4 = [];
// var screen5 = [];
// var screen6 = [];

// var id;
// var fileName;
// var screenRelation;
// var rowID;


const viewData = function(req, res, next) { //middleware function
    console.log("Data being retrieved");
    next()

}

app.use(viewData); // Find out how this works?

//root website
app.get('/', (req, res) => {

    Promise.all(
        [
            sequelize.query("SELECT * FROM manifestos"),
            sequelize.query("SELECT * FROM screens")
        ])
    .then(results => 
        {
            const manifestos = results[0][0]; //second array contains the data (there is excess elements thats not needed)
            const screens = results[1][0];

            console.log(screens);

            res.render('index', {screens:screens, manifestos: manifestos});
        })
});



  //if it cant find any valid View, this will catch it the exception (last to be called)
  app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
  })


const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });