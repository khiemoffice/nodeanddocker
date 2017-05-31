const { MongoClient, ObjectID } = require('mongodb')
MongoClient.connect('mongodb://mongo:27017', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongodb', err)
    }
    console.log('Connected to MongoDB server')
    //db.collection('inven').updateOne({ item: { $in: ['canvas'] } }, { $set: { qty: 200 } })

    db.collection('inven').findOneAndUpdate(
        { _id: new ObjectID('591f0e7c2b34a133bd10529e') },
        { $set: { uom: 'hahah' } }, {
            returnOriginal: false
        }
    ).then((result) => {
        console.log(result)
    })
    db.close()
})