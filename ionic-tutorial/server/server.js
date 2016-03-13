var express = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    sessions = require('./routes/sessions'),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride()); // simulate DELETE and PUT

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

//app.get('/sessions', sessions.findAll);
//app.get('/sessions/:id', sessions.findById);
//app.get('/sessions/:id/name', sessions.nameById);
//app.get('/sessions/:id/title', sessions.titleById);


app.get('/sessions/:id', sessions.findById);
app.get('/sessions/:user/:passwd', sessions.auth);
app.get('/sessions/:token/request/name', sessions.getName);
//app.get('/sessions/:id/name', sessions.nameById);
//app.get('/sessions/:id/title', sessions.titleById);

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
