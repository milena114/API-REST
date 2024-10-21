
require("dotenv").config();
const User = require('./models/User');
const express = require('express');
const mongoose = require("mongoose")
const app = express();
app.get("/",(req,res)=>{
    console.log("salut les gars");
    
}
)

app.listen("3000");
console.log("attente de requete au port 3000");

//CONNECT TO MONGODB
mongoose
.connect(process.env.MONGO_URI,{})
.then(() =>console.log("MongoDB Connected")
)
.catch((err)=>{
    console.error("MongoDB Connection Error:",err)
}
)

// Middleware
app.
ap
use(express.json());
// Routes
app.
app.
get('/users', async (req, res) => {
    
 
const users = await User.find();
    res.json(users);
});
app.


post('/users', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
});



app
put('/users/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
});


delete('/users/:id', async (req, res) => {
    
  
await User.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});



