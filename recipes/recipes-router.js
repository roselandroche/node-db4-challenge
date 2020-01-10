const express = require("express")
const recipesModel = require("./recipes-model")
// const db = require("../data/db.config")

const router = express.Router()

router.get("/", async (req, res, next) => {
    try{
        res.json(await recipesModel.getRecipes())
    }
    catch(err) {
        next(err)
    }
})

module.exports = router


// server.get("/", async (req, res, next) => {
//     try {
//         res.json(await db("recipes"))
//     }
//     catch(err) {
//         next(err)
//     }
// })