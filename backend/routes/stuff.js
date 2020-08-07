// routes 
const express = require('express');
const router = express.Router();
const stuffCtrl = require('../controllers/stuff');

router.get('/api/stuff', stuffCtrl.getAllThings);
router.post('/', stuffCtrl.createThning);
router.get('/:id', stuffCtrl.getOneThing);
router.put('/:id', stuffCtrl.modifyThing);
router.delete('/:id', stuffCtrl.deleteThing);

module.exports = router;