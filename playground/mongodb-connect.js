const MongoClient = require('mongodb').MongoClient
MongoClient.connect('mongodb://mongo:27017', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb', err)
    }
    console.log('Connected to MongoDB server')
    db.collection('inven').find().toArray().then((docs) => {
        console.log(docs)
    })
    db.close()
})