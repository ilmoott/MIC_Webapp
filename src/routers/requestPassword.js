const express = require('express');
const router = new express.Router();

router.get('/requestPassword', (req, res, next)=>{
    res.render('requestPassword.hbs', {layout: false});
});

router.post('/requestPassword/send', (req, res)=>{
    //1. search email in the database

    //2. send an email with the password

    //3. send a message saying the user will get his password soon
})

module.exports = router;