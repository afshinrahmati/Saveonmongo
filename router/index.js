const express = require("express")
const router = express.Router()
const axios = require("axios")
// ********* Models **********
const saveonmongo = require('../models/ModelIndex')

// ******* Controller*********
const controllerIndex = require('../controller/ControIndex')

// ******* Delete Collection  + axsios
router.get('/',controllerIndex.First)


// ********SHOW ALL DataBases*************

router.get("/all",controllerIndex.ShowAll);


// *********Search on Databases************
router.get('/:code', controllerIndex.ShowOnce)










module.exports = router