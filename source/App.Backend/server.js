require('dotenv').config();  // Load environment variables from .env

const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const playerStats = require('./models/PlayerStatsSchema');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGODB_TOKEN)
.then(()=>{
    console.log('\nConnected to the database :D!');
}).catch((error) => {
    console.log(error);
});

// Endpoint to get player stats by name
app.get('/stats/player/:name', async (req, res) => {
    const playerName = req.params.name;

    try {
        const playerStatsData = await playerStats.findOne({ name: playerName });

        if (!playerStatsData) {
            return res.status(404).json({ message: 'Player not found' });
        }

        res.json(playerStatsData);
    } catch (err) {
        console.error('Error retrieving player stats:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
