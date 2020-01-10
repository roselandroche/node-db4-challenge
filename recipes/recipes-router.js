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