const dbConnection = require('../../config/dbConnection');

module.exports = app => {

  const connection = dbConnection();

  app.get('/newsletter', (req, res) => {
    connection.query('SELECT * FROM newsletter', (err, result) => {
      res.render('newsletter/newsletter.ejs', {
        newsletter: result
      });
    });
  });

  app.post('/newsletter', (req, res) => {
    const { id_place, name, address, id_table, date, votes } = req.body;
    connection.query('INSERT INTO newsletter SET ? ',
      {
        id_place,
        name,
        address,
        id_table,
        date,
        votes
      }
    , (err, result) => {
      res.redirect('/newsletter');
    });
  });
};
