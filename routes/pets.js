const { Router } = require('express')
const { createPet } = require('../controllers/pets')

const router = Router()

router.post('/', createPet)

module.exports = router;