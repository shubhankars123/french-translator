const Translation = require('../model/schema.js');
const { translate } = require('@vitalets/google-translate-api');


exports.translateText = async (req, res) => {
    try {
       
        const { text } = req.body;
        if (!text) {
            return res.status(400).json({ error: 'Invalid request body. Please provide JSON data with key "text".' });
        }

    
        let translation = await Translation.findOne({ englishText: text });
        if (!translation) {
            
            const { text: translatedText } = await translate(text, { to: 'fr' });
            
            translation = new Translation({ englishText: text, frenchText: translatedText });
            await translation.save();
        }

       
        res.json({ translation: translation.frenchText });
    } catch (error) {
        console.error('An error occurred:', error);
        res.status(500).json({ error: 'An error occurred during translation.' });
    }
};