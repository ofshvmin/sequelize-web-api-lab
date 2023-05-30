const router = require('express').Router()
const horsesCtrl = require('../controllers/horses.js')



//GET
router.get('/', horsesCtrl.index)

//POST
router.post('/', horsesCtrl.create)

//PUT
router.put('/:horseId', horsesCtrl.update)

//DELETE
router.delete('/:horseId', horsesCtrl.delete)

module.exports = router