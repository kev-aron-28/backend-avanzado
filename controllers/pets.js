const Pet = require('../models/pet');

const createPet = async (req, res) => {
    const { name, age, owner } = req.body;
    
    const pet = new Pet({ name, age, owner });
    await pet.save();
    return res.json({ 
        msg: 'Pet created successfully'
    })
}

module.exports = {
    createPet
}