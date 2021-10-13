const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

router.get('/exercise', (req, res) => {
    try{
        res.sendFile(path.join(__dirname, '../public/exercise.html')); 
    } catch (err) {
        res.status(400).json(err)
    }

})

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
})

module.exports = router;
