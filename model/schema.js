const mongoose = require('mongoose');

const translationSchema = new mongoose.Schema({
    englishText: {
        type: String,
        required: true,
        unique: true 
    },
    frenchText: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Translation', translationSchema);
