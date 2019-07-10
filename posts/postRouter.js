const express = "express";
const posts = require("./postDb");

const router = express.Router();

router.get("/", (req, res) => {
  posts
    .get()
    .then(post => {
      res.status(200).json(post);
    })
    .catch(() => {
      res.status(500).json({
        error: "Internal server error"
      });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  posts
    .getById(id)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(() => {
      res.status(500).json({
        error: "Internal server error"
      });
    });
});

router.delete("/:id", (req, res) => {
    const
});

router.put("/:id", (req, res) => {});

// custom middleware

function validatePostId(req, res, next) {}

module.exports = router;
