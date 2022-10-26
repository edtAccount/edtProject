import express from "express";

const router = express.Router();

const reportController = require("../controllers/reportController");

router.get('/report', reportController.getReport);

module.exports = router;