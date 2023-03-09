var express = require("express")
var router = express.Router();
const userController= require("../controllers/users.controller");

router.get("/", userController.all);
router.post("/", userController.insert);
router.delete("/:id", userController.remove);
router.get("/:id", userController.item);
router.put("/:id", userController.update);

module.exports = router;