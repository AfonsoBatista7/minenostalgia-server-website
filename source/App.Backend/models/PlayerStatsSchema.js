const mongoose = require('mongoose');

const PlayerStatsSchema = new mongoose.Schema({
    playerId: { type: String, require: true, unique: true },
    name: {type: String, require: true},
    names: [String],
    blcksDestroyed: Number,
    blcksPlaced: Number,
    kills: Number,
    mobKills: Number,
    mTravelled: Number,
    deaths: Number,
    timeslogin: Number,
    lastLogin: String,
    playerSince: String,
    timePlayed: String,
    redstoneUsed: Number,
    enderdragonKills: Number,
    witherKills: Number,
    fishCaught: Number,
    blockMined: Number,
    versionPlayed: [String],
    medals: [{
        medalName: String,
        medalLevel: String
    }],
    online: Boolean,
    link: String
});

const PlayerStats = mongoose.model("serverStats", PlayerStatsSchema);

module.exports = PlayerStats;
