const mongoose = require('mongoose');


const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOURI);
        console.log('Connected to MongoDB');
        } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
    }
};



module.exports = connectToMongoDB;
