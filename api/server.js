const express = require("express");
const https = require("https");
const qs = require("querystring");
const path = require("path");

// Create a new express app for our API
const app = express();
// Get environment variable or set port to default
const PORT = process.env.PORT || 9000;

// Request handler function
const httpPostRequest = (options, postData, callback) => {
    
    // Serializing object into query
    let params = qs.stringify(postData);  
      
    // Callback function for the POST request
    let req = https.request(options, res => {
        
        console.log(`statusCode: ${res.statusCode}`)
        
        // initialize a new buffer for our fetched data
        let body = "";

        // Listener to receive data, appends new chunks of data to our buffer
        res.on("data", data => {
            body += data;
        });

        // Listener for intializing callback after receiving complete response
        res.on("end", () => {
            body = JSON.parse(body);
            console.log(body);
            callback(res.statusCode, body);
        });
    })
    
    // Handle any errors occurred while making request
    req.on("error", error => {
        console.error(error)
        callback(500 ,  JSON.parse({ type: "error", message: error.message }));
    })
    
    // Execute the request with the provided data
    req.write(params)
    // End the request
    req.end()
}

// Allow access from any origin, useful when we deploy the API to a remote, e.g. Heroku
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Specify API route for fetching lectures
app.get("/lectures", (req, res) => {
    // url parameter in the form lectures?id=X
    console.log(req.query.id);

    // create a object containing our POST data
    let data = {
        action: "getLectures",
        toID: req.query.id
    };

    // Set HTTP Header information for POST request (jExam)
    let options = {
        "method": "POST",
        "hostname": "jexam.inf.tu-dresden.de",
        "port": null,
        "path": "/de.jexam.web.v4.5/spring/lectures/ajax",
        "headers": {
            "content-type": "application/x-www-form-urlencoded"
        }
    };

    // Return the result of the POST request to jExam
    httpPostRequest( options, data, (statusCode, response) => {
        res.status(statusCode).json(response);
    })   
});

// Simply render our static web page, in the future this can be done by simply hosting the file on Github Pages
app.get("/",function(req,res) {
    res.sendFile(path.resolve("index.html"));
});

// Start our Express app and log it to the console
app.listen(PORT, () => console.log(`listening on ${PORT}`));