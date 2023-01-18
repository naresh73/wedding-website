const userModel = require("./model");

const login = async (req, res) => {
    const user = await userModel.findOne({ id : req.body.id })
    if(user) {
        if(user.password === req.body.password) {
            res.send({
                message : "Hi",
                user
            })
        }
        else {
            res.send({
                message : "wrong password"
            })
        }
    }
    else {
        res.send({
            message : "Wrong id and password"
        })
    }
}

const createId = async (req,res) => {
    try {
        const userId = await userModel(req.body)

        await userId.save()
        console.log("successfully");

    } catch (error) {
        res.send({
            error
        })
    }
}

const controller = { login, createId }

module.exports = controller;

