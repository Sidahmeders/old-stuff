const express = require('express');
const Store = require('../models/store.model');

const router = express.Router();


router.get('/api/v1/stores', async (req, res, next) => {
    try {
        const stores = await Store.find();

        return res.status(200).json({
            success: true,
            count: stores.length,
            data: stores
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message})
    }
});

router.post('/api/v1/stores', async (req, res, next) => {
    try {
        const store = await Store.create(req.body);

        return res.status(200).json({
            success: true,
            data: store
        })
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: err.message})
    }
});


module.exports = router;
