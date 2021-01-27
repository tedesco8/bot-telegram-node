const app = require("express")();
const sociales = require('./src/domain/sociales')
require("dotenv").config();

app.listen(3000);
app.get("/", (req, res) => res.send("Hello World"))

sociales.social()
