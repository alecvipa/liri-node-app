require("dotenv").config();
exports.spotify= {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET

}

console.log(exports.spotify);

module.exports = exports.spotify;