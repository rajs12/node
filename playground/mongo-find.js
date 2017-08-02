const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/todoapp', (err, db)=>{
    if (err){
      return  console.log('errror');}
      db.collection('Todos').find({completed:false}).toArray().then((docs)=>{
          console.log(JSON.stringify(docs,undefined,2));
          console.log(docs);
      },
        (err)=>{


          console.log('not find');
      })
         db.close();
    });