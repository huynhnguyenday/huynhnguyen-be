const express = require("express");
const {
  submitContact,
  getContacts,
  getContact,
  updateContactStatus,
  deleteContact,
} = require("../controllers/contact");

const router = express.Router();

// All routes are public now
router.post("/", submitContact);
router.get("/", getContacts);
router.get("/:id", getContact);
router.put("/:id", updateContactStatus);
router.delete("/:id", deleteContact);

module.exports = router;
