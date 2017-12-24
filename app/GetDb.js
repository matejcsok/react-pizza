const { MongoClient, ObjectID } = require('mongodb');

var fromDb = () => {

    MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
      if (err) {
        return console.log('Unable to connect MongoDB server');
      }
      console.log('Connected to MongoDB server');

      db.collection('todos').findOne({ _id: new ObjectID('5a3e86266ba479f0045466b0') }).then((docs) => {
        return docs.text

        
      }
      ).catch(e => {
          console.log('szar', e)
      });

      db.close();
    });
}

module.export = fromDb;