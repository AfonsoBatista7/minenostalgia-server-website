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

const mongoToken = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/DiscordBot?retryWrites=true&w=majority`

// Function to connect to MongoDB with retry logic
const connectWithRetry = (retries = 5, delay = 3000) => {
    mongoose.connect(mongoToken)
        .then(() => {
            console.log('\nConnected to the database :D!');
            // Optionally, you can start your application services here
        })
        .catch((error) => {
            console.error('Error connecting to the database:', error);
            if (retries > 0) {
                console.log(`Retrying in ${delay / 1000} seconds...`);
                setTimeout(() => connectWithRetry(retries - 1, delay), delay);
            } else {
                console.log('Failed to connect to the database after multiple attempts.');
                process.exit(1); // Optionally exit if you cannot connect
            }
        });
};

connectWithRetry();

// Endpoint to get player stats by name
app.get('/stats/:name', async (req, res) => {
    const playerName = req.params.name;

    try {
        const playerStatsData = await playerStats.findOne({ name: playerName });

        if (!playerStatsData) return res.status(404).json({ message: 'Player not found' });

        res.json(playerStatsData);
    } catch (err) {
        console.error('Error retrieving player stats:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

app.get('/players', async (req, res) => {

    try {
        const playerNames = await playerStats.find().select('name online lastLogin timePlayed');

        if (!playerNames) return res.status(404).json({ message: 'No Players available' });

        res.json(playerNames);
    } catch (err) {
        console.error('Error retrieving player stats:', err);
        res.status(500).json({ message: 'Server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
