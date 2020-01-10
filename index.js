const express = require("express")
const db = require("./data/db.config")

const server = express()
const port = process.env.PORT || 4000

server.use(express.json())

server.get("/", async (req, res, next) => {
    try {
        res.json(await db("recipes"))
    }
    catch(err) {
        next(err)
    }
})

server.use((err, req, res, next) => {
    console.log("Error:", err)

    res.status(500).json({ message: "Something went wrong"})
})

server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})