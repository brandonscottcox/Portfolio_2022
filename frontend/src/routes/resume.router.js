"use strict";
const express = require("express");
let router = express.Router();

router
    .route("/resume")
    .get((req,res) => {
        res.send("hi get /resume")
    });

module.exports = router