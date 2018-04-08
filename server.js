const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const api = require('./server/routes/api');
const sagar = require('./server/routes/sagar');
const port = 3000;
const app = express();

app.use(express.static(path.join(__dirname,'dist'))); //joining the path of the 
//current directory with dist folder..this basically gives express the access to the distributable folder

app.use(bodyParser.urlencoded({extended:true})); //parses the text as urlencoded data

app.use(bodyParser.json()); //it parses the text as json

app.use('/api',api); //for /api path use api file in routes folder
app.use('/sagar',sagar);

app.get('*',(req,res)=>{    //for any other route than /api the server has to render/send the 
    //index.html page in distributable folder. so now if u write 3000 ..express knows it has to route index.html
res.sendFile(path.join(__dirname,'dist/index.html'));
});
app.listen(port,function(){ //in server.js if listen to requests on 3000
    console.log("server running on localhost:" + port + "(server.js file)"); //if successfull
})
