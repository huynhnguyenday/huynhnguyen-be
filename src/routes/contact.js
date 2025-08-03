const express = require("express");
const {
  submitContact,
  getContacts,
  getContact,
  updateContactStatus,
  deleteContact,
} = require("../controllers/contact");

const router = express.Router();

const { protect, authorize } = require("../middleware/auth");

// Public routes
router.post("/", submitContact);

// Protected routes (admin only)
router.get("/", protect, authorize("admin"), getContacts);
router.get("/:id", protect, authorize("admin"), getContact);
router.put("/:id", protect, authorize("admin"), updateContactStatus);
router.delete("/:id", protect, authorize("admin"), deleteContact);

module.exports = router;
