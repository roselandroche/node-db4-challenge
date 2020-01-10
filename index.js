const express = require("express")
const db = require("./data/db.config")
const recipesRouter = require("./recipes/recipes-router")

const server = express()
const port = process.env.PORT || 4000

server.use(express.json())
server.use("/", recipesRouter)

server.use((err, req, res, next) => {
    console.log("Error:", err)

    res.status(500).json({ message: "Something went wrong"})
})

server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})