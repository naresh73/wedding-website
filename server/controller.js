const userModel = require("./model");
const postModel = require("./uploadImg.model");


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

const getImgs = async (req, res) => {
    const _data = await postModel.find({})
    if(_data) {
        return res.send({
            code : 200,
            message : "success",
            data : _data
        })
    }
    else {
        return res.send({
            code : 500,
            message : "service error"
        })
    }
}

const uploadImg = async (req, res) => {
    const imageUrl = req.file.path
    console.log(req.file, req.body, 16)   ;
    try {
        const newImg = new postModel({
            imageUrl : imageUrl
        })
        const success = await newImg.save();
        if(success) {
            return res.send({
                message : "New image uploaded",
            })
        }
        else {
            return res.send({
                message : 'service error'
            })
        }
        
    } catch (error) {
        res.send({
            error
        })
    }
}

const controller = { login, createId, getImgs, uploadImg }

module.exports = controller;

