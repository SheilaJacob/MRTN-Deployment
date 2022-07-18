const PetController = require('../controllers/pet.controller'); 

module.exports = (app) => {
    //grab one id
    app.get('/api/pet/:id', PetController.getOne);
    //show all id
    app.get('/api/pets', PetController.getPets); 
    // update id
    app.put('/api/pet/:id', PetController.updatePet);
    //create
    app.post('/api/pet', PetController.createPet); 
    //delete
    app.delete('/api/pet/:id', PetController.deletePet);

}