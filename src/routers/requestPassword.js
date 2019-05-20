const express = require('express');
const router = new express.Router();
const User = require('../../src/db/models/user');

router.get('/requestPassword', (req, res, next)=>{
    res.render('requestPassword.hbs', {layout: false});
});

router.post('/requestPassword/send', async (req, res)=>{
    //1. search email in the database
    const user = await User.findOne({email: req.body.email});

    if(!user){
        //TODO: fix this response
        res.send('Nao banca o malandro!');
    }else{
        //2. send an email with the password

        //3. send a message saying the user will get his password soon
        res.send('Our admin will provide you with a new password soon.');
    }
})

module.exports = router;