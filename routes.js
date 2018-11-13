const express = require('express');
const router = express.Router();

//Routers =>
router.get('/', (req, res) => {
    res.render('index.ejs');
});

router.get('/login', (req, res) => {
    res.render('login.ejs');
})


// <= Routers

module.exports = router;