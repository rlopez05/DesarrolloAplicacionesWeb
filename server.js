var express = require('express');
var app = express();
var path = require('path');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');

var mongoose = require('mongoose');
var passport = require('passport');
require('./models/User');

require('./models/places');
    // configuration =================

    //mongoose.connect('mongodb://mongolito:mon.fz16wp8@ds047325.mongolab.com:47325/mongolita');     // connect to mongoDB database on modulus.io
    //mongoose.connect('mongodb://strk9:oscarflores@ds061721.mongolab.com:61721/eat-street', function (error) {
   mongoose.connect('mongodb://localhost/test', function (error) {
        if(!error){
            console.log('connected madafaca!');
        }
    });

require('./config/passport');

//var routes = require('./routes/index');
var users = require('./routes/user');
var places = require('./routes/places');


var _port = 9000;
app.use(cors());
app.use(express.static(__dirname + '/public/dist'));          // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cookieParser());
app.use('/api/users', users);
app.use('/api/places', places);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handlers

// development error handler
// will print stacktrace
// if (app.get('env') === 'development') {
//   app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: err
//     });
//   });
// }
//app.route('/api/auth/signin').post(signin);
// listen (start app with node server.js) ======================================
app.listen(_port);
console.log("App listening on: ", _port);
   