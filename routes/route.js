var express = require("express");
var userController = require("../controller/usercontroller");
var productcontroller = require("../controller/productcontroller");
const router = express.Router();

router.post("/user/login", userController.loginUserController);
router.post("/user/register", userController.registerUserController);
router.get("/show", productcontroller.showproduct);
router.post("/new", productcontroller.addproduct);

module.exports = router;
