const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');
    const db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5addec5e64206bce17661716')
    }, {
        $set: {
            completed: false
        },
        $inc: {
            number: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })

    client.close();
});