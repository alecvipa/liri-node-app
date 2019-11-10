var inquirer = require("inquirer");
var axios = require("axios");
var spotify_keys = require("./key");
var id = spotify_keys.id;
var secret = spotify_keys.secret;



inquirer
    .prompt([
        // Here we create a basic text prompt.
        {
            type: "list",
            message: "Which action would you like to do?",
            choices: ["Search a song", "Search a movie", "Bands in Town"],
            name: "firstaction"
        },

    ])
    .then(function (inquirerResponse) {
        // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
        if (inquirerResponse.firstaction === "Search a song") {
            console.log(inquirerResponse.firstaction);

            inquirer
                .prompt([
                    // Here we create a basic text prompt.
                    {
                        type: "input",
                        message: "Tell me a song",
                        name: "songmind"
                    },
                ])
                .then(function (inquirerResponse) {


                    var song = String(inquirerResponse.songmind);
                    console.log(song);
                    var Spotify = require('node-spotify-api');

                    var spotify = new Spotify({
                        id,
                        secret

                    });

                    spotify
                        .search({ type: 'track', query: 'Hello' })
                        .then(function (response) {
                            console.log(response);
                        })
                        .catch(function (err) {
                            console.log(err);
                        });














                })



        }
        else if (inquirerResponse.firstaction === "Search a movie") {
            console.log(inquirerResponse.firstaction);
            inquirer
                .prompt([
                    // Here we create a basic text prompt.
                    {
                        type: "input",
                        message: "Which movie are you thinking of?",
                        name: "moviemind"
                    },
                ])
                .then(function (inquirerResponse) {


                    var movie = String(inquirerResponse.moviemind);
                    console.log(movie)

                    axios.get("https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy").then(
                        function (response) {
                            // If the axios was successful...
                            // Then log the body from the site!
                            console.log(response.data);
                        },

                        function (error) {
                            if (error.response) {
                                // The request was made and the server responded with a status code
                                // that falls out of the range of 2xx
                                console.log(error.response.data);
                                console.log(error.response.status);
                                console.log(error.response.headers);
                            } else if (error.request) {
                                // The request was made but no response was received
                                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                                console.log(error.request);
                            } else {
                                // Something happened in setting up the request that triggered an Error
                                console.log("Error", error.message);
                            }
                            console.log(error.config);
                        }


                    );








                })


        } else if (inquirerResponse.firstaction === "Bands in Town") {
            console.log(inquirerResponse.firstaction);
            inquirer
                .prompt([
                    // Here we create a basic text prompt.
                    {
                        type: "input",
                        message: "Which artist would you like me to search?",
                        name: "artistmind"
                    },
                ])
                .then(function (inquirerResponse) {


                    var artist = String(inquirerResponse.artistmind);
                    console.log(artist);

                    axios.get("https://rest.bandsintown.com/artists/" + artist + "?app_id=codingbootcamp").then(
                        function (response) {
                            // If the axios was successful...
                            // Then log the body from the site!
                            console.log(response.data);
                        },

                        function (error) {
                            if (error.response) {
                                // The request was made and the server responded with a status code
                                // that falls out of the range of 2xx
                                console.log(error.response.data);
                                console.log(error.response.status);
                                console.log(error.response.headers);
                            } else if (error.request) {
                                // The request was made but no response was received
                                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                                console.log(error.request);
                            } else {
                                // Something happened in setting up the request that triggered an Error
                                console.log("Error", error.message);
                            }
                            console.log(error.config);
                        }


                    );










                })
        }
    })