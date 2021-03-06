const express=require('express');
const bodyparser=require("body-parser");
//mongoose module
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactsfordance', {useNewUrlParser: true , useUnifiedTopology: true});
//const fs=require("fs");
const app=express();
const path =require("path");
const port=80;

//mpngoose
//define schema
var cnctSchema=new mongoose.Schema({
    name:String,
    age:String,
    adress:String,
    phone:String
});

//model
var Contact=mongoose.model("Contact",cnctSchema);

//createOBJ

//Express

//for serving static files
app.use('/static',express.static('static'));//url 1st folder 2nd
app.use(express.urlencoded());


app.set('view engine','pug');
//set views directory
app.set('views',path.join(__dirname, 'views'));

app.get('/',(req,res)=>{
    const con="hi";
    const params ={'title':"THE DANCE ACADEMY","content":con};
    res.render("home.pug",params);
});


app.get('/contact',(req,res)=>{

    const con="hi";
    const params ={'title':"CONTACT","content":con};
    res.render("contact.pug",params);
});

    
app.get('/about',(req,res)=>{

    const con="hi";
    const params ={'title':"ABOUT US","content":con};
    res.render("about.pug",params);
});


app.get('/services',(req,res)=>{

        const con="hi";
        const params ={'title':"OUR SERVICES","content":con};
        res.render("services.pug",params);
});

app.post('/contact',(req,res)=>{
    //console.log("You have submiited the form succesfully")
    //const cont={'content':"parag"};
    //console.log(req.body);
    //name=req.body.name;
    //age=req.body.age;
    //let text=`name is ${name} and age is ${age}`;
    //fs.writeFileSync("output.txt",text);

    //obj creation
    var contactdata = new Contact(req.body);
    contactdata.save().then(()=>{
        res.render('contact.pug');
    }).catch(()=>{

        res.status(404).send('error')
    });
     
    //res.render('contact.pug');
   
}
);

app.listen(port,()=>{
    console.log(`running on ${port}`);
    });
    