const express = require("express");
const router =  express.Router();
const fileController   = require('../controllers/bucketController')

router.post("/create", fileController.createBuckets);

router.get("/view", fileController.viewBuckets)



module.exports = router;