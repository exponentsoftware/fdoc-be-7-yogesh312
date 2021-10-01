const list = require("../controllers/list.controller.js");
var router = require("express").Router();
  
// Create a new Tutorial
router.post("/", list.create);
  
// Retrieve all Tutorials
router.get("/", list.findAll);
  
// Retrieve all published Tutorials
router.get("/toptier", list.toptier);
  
// Retrieve a single Tutorial with id
router.get("/:id", list.findOne);
  
// Update a Tutorial with id
router.put("/:id", list.update);
  
// Delete a Tutorial with id
router.delete("/:id", list.delete);
  
// Create a new Tutorial
router.delete("/", list.deleteAll);
  
module.exports = router;
