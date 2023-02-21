require('dotenv').config();
const Teams = require('./models/team')
const jsonTeam = require('./team.json');
const mongoose = require('mongoose');
//mongoose.set('strictQuery', true);


const startServer = async() =>{
    try {
        await mongoose.connect('mongodb+srv://kriskaku07:Sam10197@christian007.2fjigwf.mongodb.net/FOOTBALLAPI?retryWrites=true&w=majority');
        await Teams.deleteMany()
        await Teams.create(jsonTeam);
        console.log('working');
        process.exit(0);
    }catch(err){
        console.log(err);
        process.exit(1);   
    }
}
startServer()