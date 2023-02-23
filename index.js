require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3100;
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const cors = require('cors');

app.use(cors());
app.use(express.json());


const teamRouter = require('./routes/teamRouter')
app.use(teamRouter);

//ERROR ROUTE
app.use((req,res) =>{
    res.status(404).send('Route does not exist')
})




const startServer = async() =>{
    try {
        await mongoose.connect('mongodb+srv://kriskaku07:Sam10197@christian007.2fjigwf.mongodb.net/FOOTBALLAPI?retryWrites=true&w=majority')
        app.listen(PORT,()=>{
            console.log(`server running on port ${PORT}...`)
        })

    }catch(err){
        console.log(err);
        
    }
}
startServer();