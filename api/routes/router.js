const path = require("path");
const { Router } = require("express");

const router = Router();

router.get("^/$|/index(.html)?", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

module.exports = router;
