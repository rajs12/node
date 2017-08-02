const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/todoapp', (err, db)=>{
    if(err){
         console.log('there is error');
         return;
    }
        console.log('suces');
        db.collection('users').insertOne({
            Text:'something',
            completed:false},
           (err,result)=>{
               if(err)
                {
                    console.log('unable to run');
                }
                console.log(JSON.stringify(result.ops,undefined,2));
                console.log(result.ops);
           } 


        ); 
        db.collection('users').insertOne({
          name:'andrew',
          age: 25,
          location: 'delhi',
        },
        (err,result)=>{
            if(err){
                console.log('error');
            }

        }


        );










        db.close();
       });