const express = require("express");
const {
  getAllpost,
  createpost,
  updatepost,
  deletepost,
} = require("../controllers/PostControllers");

const router = express.Router();

router.get("/", getAllpost);
router.post("/", createpost);
router.patch("/", updatepost);
router.delete("/", deletepost);

module.exports = router;
