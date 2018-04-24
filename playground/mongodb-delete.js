const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');
    const db = client.db('TodoApp');

    /* 
        deleteMany
        deleteOne
        findOneAndDelete
    */

    //client.close();
});