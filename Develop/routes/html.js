const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

router.get('/exercise', (req, res) => {
    try {
       res.sendFile(path.join(__dirname, '../public/exercise.html')); 
    } catch (err){
        console.log('here is the error', err)
    }
    
})

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
})

module.exports = router;

// module.exports = function (app) {
//     app.get('/', function (req, res) {
//       res.sendFile(path.join(__dirname, '../public/index.html'));
//     });
//     app.get('/exercise', function (req, res) {
//       res.sendFile(path.join(__dirname, '../public/exercise.html'));
//     });
//     app.get('/stats', function (req, res) {
//       res.sendFile(path.join(__dirname, '../public/stats'));
//     });
//   };