const express = require("express")
const app = express()

app.use(express.json())

const movies = [
    {
        id: 1,
        name: "Inception",
        genre: "Drama",
        year: 2002,
        rating: 9.2,
        actors: ["Shah", "Amit"]
    },
    {
        id: 2,
        name: "The Dark Knight",
        genre: "Action",
        year: 2008,
        rating: 9.0,
        actors: ["Christian Bale", "Heath Ledger"]
    },
    {
        id: 3,
        name: "Interstellar",
        genre: "Sci-Fi",
        year: 2014,
        rating: 8.6,
        actors: ["Matthew McConaughey", "Anne Hathaway"]
    },
    {
        id: 4,
        name: "Parasite",
        genre: "Thriller",
        year: 2019,
        rating: 8.6,
        actors: ["Kang-ho Song", "Sun-kyun Lee"]
    },
    {
        id: 5,
        name: "The Matrix",
        genre: "Sci-Fi",
        year: 1999,
        rating: 8.7,
        actors: ["Keanu Reeves", "Laurence Fishburne"]
    },
    {
        id: 6,
        name: "Fight Club",
        genre: "Drama",
        year: 1999,
        rating: 8.8,
        actors: ["Brad Pitt", "Edward Norton"]
    }
];



app.listen(3000, ()=>{
    console.log("Server is running");
})

app.get("/",(req,res) => {
    res.send("Hello World! How are you!");
})

app.get("/api/movies", (req,res) => {
    res.send(movies);
})


app.get("/api/movies/:id", (req,res) => {
    const id = req.params.id;
    const movie =movies.find((m) => m.id === parseInt(id))
    res.send(movie);
})

app.post("/api/movies", (req,res) => {
    const movie = req.body;
    console.log({movie});
    movies.push(movie);
    res.send(movie);
})