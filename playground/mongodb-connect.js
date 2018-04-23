const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, client) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');
    const db = client.db('TodoApp');

/*     db.collection('Todos').insertOne({
        text: 'Create Node project',
        completed: false
    },
    (error, result) => {
        if (error) {
            return console.log('Unable to insert todo', error);
        }

        console.log(result.ops[0]._id.getTimestamp());
    }) */

    client.close();
});