const express = require('express');
const router = new express.Router();

router.get('/', (req, res, next)=>{
    res.render('main.hbs', {layout: false});
});

module.exports = router;