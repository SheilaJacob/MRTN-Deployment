const mongoose = require('mongoose');


const PetShelterSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [ true,"name is required"],
        minlength: [3, 'The name  should be more than 3 characters!'],
    },
    type: {
        type: String,
        required: [ true,"pet type is required"],
        minlength: [3, 'The pet type  should be more than 3 characters!'],
    },
    description: {
        type: String,
        required: [ true,"description is required"],
        minlength: [3, 'description  should be more than 3 characters!'],
    },
    skills :{
        type: String,
        required: [ true,"pet skill is required"],
        max: [3, 'pets may have 0 to 3 skills'],
        },
    skillTwo :{
            type: String,
            required: [ true,"pet skill is required"],
            max: [3, 'pets may have 0 to 3 skills'],
            },
    skillThree :{
        type: String,
        required: [ true,"pet skill is required"],
        max: [3, 'pets may have 0 to 3 skills'],
        },

}, { timestamps: true });
module.exports = mongoose.model('PetShelter', PetShelterSchema);