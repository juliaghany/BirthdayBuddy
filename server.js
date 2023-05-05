// const path = require('path');
// const express = require('express');
// const session = require('express-session');
// const exphbs = require('express-handlebars');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const routes = require('./controllers');
// const sequelize = require('./config/connection');
// // const helpers = require('./utils/helpers');

// const app = express();
// const PORT = process.env.PORT || 3001;

// // set up sessions with cookies
// // const sess = {
// //     secret: 'Super secret secret',
// //     cookie: {
// //         maxAge: 300000,
// //         httpOnly: true,
// //         secure: false,
// //         sameSite: 'strict',
// //     },
// //     resave: false,
// //     saveUninitialized: true,
// //     store: new SequelizeStore({
// //         db: sequelize
// //     })
// // };

// // app.use(session(sess));

// // const hbs = exphbs.create({ helpers });

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);

// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () =>
//         console.log(`Server running on port ${PORT}`))
// });

const express = require("express");
const exphbs = require("express-handlebars");
const db = require("./config/connection")

// const express = require("express");
// const exphbs = require("express-handlebars");
// const db = require("./config/connection")

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
