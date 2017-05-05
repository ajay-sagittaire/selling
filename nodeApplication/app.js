const express = require('express');
var apis = require("./config/api-config");
var port = "8000";
apis.app.listen(process.env.PORT || 9890, function (){
    console.log("server connected to port "+port);
})