const Data = require('../models/data')

exports.getData = async (req, res) => {
    try {
        const data = await Data.find()
        res.status(201).json(data)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

exports.postData = async (req,res) => {
    try {
        // const newData = new Data(req.body)
        // await newData.save()
        // const hello = {
        //     dataArray: req.body
        // }
        // Data.create(hello)
        await Data.deleteMany()
        Data.insertMany(req.body)
        res.status(201).send("success")
    } catch (error) {
        res.status(500).send(error.message)
    }
}