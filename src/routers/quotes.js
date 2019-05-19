const express = require('express');
const router = new express.Router();
const path = require('path');


router.get('/quotes', (req, res)=>{
    res.render('quotes.hbs', {layout: false});
});


module.exports = router;