const path = require("path"),
    express = require("express");

const DIST_DIR = path.join(__dirname, "client"),
    PORT = 3000,
    app = express();

//Serving the files on the dist folder
app.use(express.static(DIST_DIR));

//Send index.html
app.get("*", function(req, res) {
    res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(PORT, (a, b) => {
    console.log('listening on:', PORT);
});
