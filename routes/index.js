const router = require('express').Router();
const redirController = require("../controllers/redirControllers");



/* GET home page. */
router.get('/',redirController.redir_index);
router.post("/",redirController.redir_index_post);
router.get("/:short",redirController.redir_short);

module.exports = router;
