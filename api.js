const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        miprimerApi: 'It works!'
    });
});

module.exports = router;