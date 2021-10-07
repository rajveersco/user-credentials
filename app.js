//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const app = express();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: true})); 

app.get("/", function(req, res){   
    res.sendFile(__dirname + '/index.html');
});

app.post("/", function(req, res){    

    const email = req.body.aemail;
    const newpa = req.body.apassword;

    const data = {  //local member function with specific mailchimp attributes
        members:[
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    MERGE0: email,
                    MMERGE6: newpa
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data); //To post jason required instruction for mailchimp servers

    const url = "https://us5.api.mailchimp.com/3.0/lists/6b966817ed";

    const options = {
        method: "POST",
        auth: "rajveersco:06ea4d8059b4b900d344c6436c409efb-us5"
    }

    const request = https.request(url, options, function(response){

        //success page

        if(response.statusCode === 200){
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }

        response.on("data", function(data){
            console.log(JSON.parse(data));
        });

    });

    request.write(jsonData);
    request.end();

});

app.post("/failure", function(req, res){
    res.redirect("/");
});

app.listen(process.env.PORT, function(){
    console.log("Server is running");
});


