//  KERTAUSTA NODE.JS-KIRJASTOSTA
// ===============================

// KIRJASTOT
// ---------

// Express-palvelin ja Handlebars templating engine
const express = require('express');
const {engine} = require('express-handlebars');

// ASETUKSET
// ---------

// Luodaan varsinainen sovellus Express-kirjastolla
const app = express();

// Määritellään sovellukselle TCP-portti
const PORT = process.env.PORT || 8080;

// Määritellään sovelluksen käyttämät hakemistot
app.use(express.static('public'));

// Määritellään sivumallit (templates)
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// URL-REITITYS
// ------------

// Kotisivu
app.get('/', (req, res) => {
    let indexData = {
        'weekday': 'maanatai',
        'meal': 'riisiä ja kanaa tandori-kastikkeessa'
    };
    res.render('index', indexData);
});
// About-sivu
app.get('/about', (req, res) => {
    let aboutData = {
        'group1': 'TiVi24B',
        'group2': 'TiVi20oa'
    };
    res.render('about', aboutData);
});
// PALVELIMEN KÄYNNISTYS
// ---------------------

app.listen(PORT);
console.log(`Palvelin käynnistetty portissa ${PORT}`);