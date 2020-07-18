const router = require("express").Router()

const Users = require("./users-model")
const restricted = require("../auth/authenticate-middleware")

router.get("/", restricted, async (req, res, next) => {
    try {
        res.json(await Users.find())
    }
    catch (err) {
        next(err)
    }
})

module.exports = router