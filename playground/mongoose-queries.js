const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

/* let id = '6adf45cd119780251caa20171';

if(!ObjectID.isValid(id)) {
    console.log('Invalid ID');
}

Todo.find({
    _id: id
}).then((docs) => {
    console.log('Todos: ', docs);
});

Todo.findOne({
    _id: id
}).then((doc) => {
    console.log('Todo: ', doc);
});


 Todo.findById(id).then((doc) => {
    if (!doc) {
        return console.log('Id not found');
    }
    console.log('Todo by Id: ', doc);
}).catch((error) => {
    console.log(error);
});
*/

