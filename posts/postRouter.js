const express = require("express");
const posts = require("./postDb");

const router = express.Router();
router.use(express.json());

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
  const { id } = req.params;
  posts
    .remove(id)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(() => {
      res.status(500).json({
        error: "Internal server error"
      });
    });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const post = req.body;
  posts
    .update(id, post)
    .then(post => {
      res.status(200).json(post);
    })
    .catch(() => {
      res.status(500).json({
        error: "Internal server error"
      });
    });
});

// custom middleware

function validatePostId(req, res, next) {
  const { id } = req.params;
  if (!isNaN(parseInt(id, 10))) {
      if(id){}
  }
}

module.exports = router;
