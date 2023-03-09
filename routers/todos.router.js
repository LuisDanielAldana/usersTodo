var express = require("express")
var router = express.Router({mergeParams:true});
const todosController= require("../controllers/todos.controller");



router.get("/", todosController.all);
router.post("/", todosController.insert);
router.delete("/:id", todosController.remove);
router.get("/:id", todosController.item);
router.put("/:id", todosController.update);

module.exports = router
