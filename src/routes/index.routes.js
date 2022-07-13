// const express = require('express');
import express from 'express';

const router = express.Router();
import { renderIndex, renderAbout } from "../controllers/index.controller.js";


router.get("/", renderIndex);
router.get("/about", renderAbout);

// module.exports = router
export default router;
