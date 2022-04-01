const app = require('./config/server');

require('./app/routes/newsletter')(app);

// starting the server
app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});