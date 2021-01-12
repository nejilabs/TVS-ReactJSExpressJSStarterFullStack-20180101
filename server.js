const express = require('express');
const app = express();

app.get('/api/customers',(req, res)=>{

  //start: Example JSON Data
  const customers = [
    {id:1,firstName:'f1',lastName:'l1'},
    {id:2,firstName:'f2',lastName:'l2'},
    {id:3,firstName:'f3',lastName:'l3'},
  ];
   //end: Example JSON Data

  res.json(customers); //Respond with data as json
});


const port = 5000;
app.listen(port,()=>console.log(`Server started on port ${port}`));
