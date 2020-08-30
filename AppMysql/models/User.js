const { Schema, model } = require('mongoose')

const OrphelinSchema = new Schema({
    name:{
        type: String,
        required: true,
    },age:{
        type: String,
        required: true,
    },gender:{
        type: String,
        required: true,
    },provinance:{
        type: String,
        required: true,
    },niveau_d_etude:{
        type: String,
        required: true,
    },dob:{
        type: Date,
        required: true,
    },name_giving:{
        type: String,
        required: true,
    },parente:{
        type: String,
        required: true,
    },profession:{
        type: String,
        required: true,
    },nameF:{
        type: String,
        required: true,
    },Fprofession:{
        type: String,
        required: true,
    },Fage:{
        type: String,
        required: true,
    },nameM:{
        type: String,
        required: true,
    },Mprofession:{
        type: String,
        required: true,
    },Mage:{
        type: String,
        required: true,
    },phone:{
        type: String,
        required: true,
    },Fphone:{
        type: String,
        required: true,
    },created_at: {
        type: Date,
        default: Date.now
    }
})
const Orphelin = mongoose.model('Orphelin', Orphelin)

module.exports = Orphelin