const express = require("express")
const router = express.Router()
const dataController = require('../controllers/controls')

router.get('/api/data', dataController.getData)

router.post('/api/data', dataController.postData)

module.exports = router