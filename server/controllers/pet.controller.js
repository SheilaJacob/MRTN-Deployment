const PetShelter = require('../models/pet.model');


//show all
module.exports = {
    getPets: (request, response) => {
        PetShelter.find({})
        .then((pets) => {
            response.json(pets);
        })
        .catch((err) => {
            console.log('ERROR IN Get all', err);
            response.status(400).json({ message: 'something went wrong in find all pets', error: err });
        });
    },

//show one
    getOne: (request, response) => {
    PetShelter.findOne({_id: request.params.id})
        .then((findOne) => {response.json(findOne)})
        .catch((err) => {console.log('ERROR IN find one ', err);
        response.status(400).json({  err });
    });
    },

//create
    createPet: (req, res) => {
    PetShelter.create(req.body)
        .then((newPet) => {
        res.status(201).json(newPet);
        })
        .catch((err) => {
        console.log('ERROR IN create pet', err);
        res.status(400).json(  err );
        });
    },

//update
    updatePet : (request, response) => {
    PetShelter.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })
    //whats inside then is what showing up in postman 
        .then((editOne) => {
        response.json(editOne);
        })
        .catch((err) => {
        console.log('ERROR IN update pet', err);
        response.status(400).json(err);
    });
}


};

//delete

module.exports.deletePet = (request, response) => {
    PetShelter.deleteOne({ _id: request.params.id }) 
        .then(deleteConfirm => response.json(deleteConfirm))
        .catch(err => response.json(err))
}