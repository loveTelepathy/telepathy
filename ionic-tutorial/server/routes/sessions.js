//var sessions = [
//    {id:0 , title:"Introduction to Ionic", speaker:"CHRISTOPHE COENRAETS", time:"9:40am", room:"Ballroom A", description: "In this session, you'll learn how to build a native-like mobile application using the Ionic Framework, AngularJS, and Cordova."},
//    {id:1 , title:"AngularJS in 50 Minutes", speaker:"LISA SMITH", time:"10:10am", room:"Ballroom B", description: "In this session, you'll learn everything you need to know to start building next-gen JavaScript applications using AngularJS."},
//    {id:2 , title:"Contributing to Apache Cordova", speaker:"JOHN SMITH", time:"11:10am", room:"Ballroom A", description: "In this session, John will tell you all you need to know to start contributing to Apache Cordova and become an Open Source Rock Star."},
//    {id:3 , title:"Mobile Performance Techniques", speaker:"JESSICA WONG", time:"3:10Pm", room:"Ballroom B", description: "In this session, you will learn performance techniques to speed up your mobile application."},
//    {id:4 , title:"Building Modular Applications", speaker:"LAURA TAYLOR", time:"2:00pm", room:"Ballroom A", description: "Join Laura to learn different approaches to build modular JavaScript applications."}
//];

//exports.findAll = function (req, res, next) {
//    res.send(sessions);
//};
//
//exports.findById = function (req, res, next) {
//    var id = req.params.id;
//    res.send(sessions[id]);
//};
//
//exports.nameById = function (req, res, next) {
//    var id = req.params.id;
//    res.send(sessions[id].name);
//};
//
//exports.titleById = function (req, res, next) {
//    var id = req.params.id;
//    res.send(sessions[id].title);
//};
var sessions = [
    {id:0 , user:"kim",name:"keon ho",passwd:"1111", gender:"male", location:"hwasung", token:""},
    {id:1 , user:"sim", name:"won sang",passwd:"2222",gender:"male", location:"suwon", token:""},
    {id:2 , user:"jang",name:"yong ki",passwd:"3333",gender:"male", location:"yongin", token:""},
    {id:3 , user:"telepathy", name:"loveTelpathy",passwd:"4444",gender:"female", location:"Seoul", token:""},
    {id:4 , user:"guest", name:"guest",passwd:"5555", gender:"female", location:"Sydney", token:""}
];


//exports.findAll = function (req, res, next) {
//    res.send(sessions);
//};
//
//exports.findById = function (req, res, next) {
//    var id = req.params.id;
//    res.send(sessions[id]);
//};
//
//exports.nameById = function (req, res, next) {
//    var id = req.params.id;
//    res.send(sessions[id].name);
//};
//
//exports.titleById = function (req, res, next) {
//    var id = req.params.id;
//    res.send(sessions[id].title);
//};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(sessions[id]);
};
exports.auth = function (req, res, next) {
    var user = req.params.user;
    var passwd = req.params.passwd;
    var found=false;
    for(var i=0; i<sessions.length; i++){
        var s=sessions[i];

        if(s.user==user && s.passwd==passwd){
            sessions[i].token=passwd+"ok";
            res.send(sessions[i].token);
            found = true;
        }else{
            sessions[i].token="";
        }
    }

    if(found===false)
        res.send("false");
};

exports.getName = function (req, res, next) {
    var token = req.params.token;
    for(var i=0; i<sessions.length; i++){
        var s=sessions[i];

        if(s.token==token){
            res.send(sessions[i].name);
            return;
        }
    }
    res.send("expired");
};

