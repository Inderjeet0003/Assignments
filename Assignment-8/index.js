const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const seedDB = require('./seed');
const methodOverride = require('method-override');
const session = require('express-session')
const flash = require('connect-flash')
    // Routes
const blogRoutes = require('./routes/blog');

mongoose.connect('mongodb://localhost:27017/nature_blogApp', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.log("OH NO ERROR!!!");
        console.log(err);
    });


// seedDB();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

const sessionConfig = {
    secret: 'weneedsomebettersecret',
    resave: false,
    saveUninitialized: true,

}
app.use(session(sessionConfig))
app.use(flash())

app.use((req, res, next) => {
    res.locals.success = req.flash('success')
    res.locals.error = req.flash('error')
    next()
})

app.get('/', (req, res) => {

    res.render('blogs/home');
})

app.use(blogRoutes);


app.listen(3000, () => {
    console.log("Server Started AT PORT 3000");
})