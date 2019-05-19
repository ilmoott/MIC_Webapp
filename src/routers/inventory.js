const express = require('express');
const router = new express.Router();


router.get('/inventory', (req, res)=>{
    res.render('inventory.hbs', {layout: false});
});


module.exports = router;