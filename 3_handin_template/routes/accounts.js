const express = require('express');
const router = express.Router();
const Account = require('../models/account');

//Endpoint for all users
router.get('/', async (req, res) => {
    try {
        // 1. return accounts from database instead
        return res.json(await Account.find().exec());
    } catch (err) {
        console.log({ message: err.message })
    };
});



//Endpoint for adding user
router.post('/', async (req, res) => {
    return res.json(await Account.create(req.body));

});

// Implement a new endpoint, that will be able to return a specific account by id. 
// instead of just printing, return the actual account. 
router.get('/:id', async (req, res) => {
    try {
        // 1. return accounts from database instead
        return res.json(await Account.findById(req.params.id).exec());
    } catch (err) {
        console.log({ message: err.message })
    };
});

//getting balance only
router.get('/:id/balance', async (req, res) => {
    try {
        let account = await Account.findById(req.params.id);
        if (account) return res.status(200).json(account.balance);
        return res.status(404).send("Account not found");
    } catch (err) {
        console.log({ message: err.message })
    };
});

module.exports = router;