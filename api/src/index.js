const path = require("path");
const express = require("express");
const router = require("../routes/router");

const app = express();
const port = 3001;

app.use("/", express.static(path.join(__dirname, "..", "public")));

app.use("/", router);

app.all("*", (req, res) => {
    res.status(404);
    if (req.accepts("html")) {
        res.sendFile(path.join(__dirname, "..", "views", "404.html"));
    } else if (req.accepts("json")) {
        res.json({ message: "404 Not Found" });
    } else {
        res.type("txt").send("404 Not Found");
    }
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
