const path = require("path");
const express = require("express");
const router = require("../routes/router");
const { logger } = require("../middlewares/logger");
const errorHandler = require("../middlewares/errorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("../config/corsOptions");

const app = express();
const port = 3001;

app.use(logger);

app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(express.json());

app.use(cookieParser());

app.use(router);

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

app.use(errorHandler);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
