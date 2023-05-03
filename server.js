const express = require("express");
const exphbs = require("express-handlebars");
const db = require("./config/connection")

const hbs = exphbs.create();

const routes = require("./controllers")

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes)

db.sync({force: false})
.then(() => {
    app.listen(PORT, () => {
        console.log("Server is now listening!")
    })
})
