const express = require('express');
const router = new express.Router();
const User = require('../../src/db/models/user');
const path = require('path');

//render admin page
router.get('/admin', (req, res)=>{
    res.render('admin.hbs', {layout: false});
});


//user login
router.post('/admin/login', async (req, res)=>{

    const user = await User.findByCredentials(req.body.email, req.body.password);

    //TODO: this is new. trying to throw an error when there is no user
    if(!user){
        console.log('Unable to login')
    }else{
        console.log('Logged in')
    }

    try{
        if(user.role === 'Admin'){
            res.render('tools.hbs', {
                body:`
                <a href="/quotes" class="btn btn--white btn--animated">Quotes Calculator</a>
                <a href="/inventory" class="btn btn--white btn--animated">Inventory</a>
                <a href="/admin/signup" class="btn btn--white btn--animated">Create User</a>
                `,
                layout: false
            });
    
        } else {
            res.render('tools.hbs', {
                body:`
                <a href="" class="btn btn--white btn--animated">Quotes Calculator</a>
                <a href="" class="btn btn--white btn--animated">Inventory</a>
                `,
                layout: false
            });
        }

    } catch(e) {
        res.send(e);
    }
   
    
    //TODO:
    //1. fix the error case (no user)
    //2. add jwt
});

router.post('/admin/logout', (req, res)=>{
    
    //TODO:
    //1. remove jwt

    //2. render home page
    res.render('main.hbs', {layout: false});
});


//create user - only for managers
router.get('/admin/signup', (req, res)=>{
    res.render('signup.hbs', {layout: false});
});

//create user - only for managers
router.post('/admin/signup', async (req, res)=>{
    if(req.body.password[0] === req.body.password[1]){
        const user = new User({
            email: req.body.email,
            password: req.body.password[0],
            role: req.body.role
        });

        try{
            await user.save();
            //TODO: maybe add a message letting the user know that all went well
            res.render('admin', {layout: false});
        }catch (e){
            res.status(400).send(e);
        }
    } else {
        //TODO: fix the response
        res.send('You must provide the same password on both fields.');
    }
});

//forget password route
router.get('/admin/password', async (req, res)=>{
    //TODO:
    //1. send an email to the user with his password
        //await and send the email
    //2. render admin page
    res.render('admin.hbs', {layout: false});
});





module.exports = router;