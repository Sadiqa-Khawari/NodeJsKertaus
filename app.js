// KERTAUSTA NODE.JS-KIRJASTOSTA
// =============================

// Kirjastojen tuontiIRJASTOT
// ===========================

// Express-palvelin ja Handlebars templating engine
const express = require('express');
const{ engine } = require('express-handlebars');

//  ASETUKSET
// ==========

// Luodaan varsinainen sovellus Express-kirjastolla
const app = express();

// Määritellään sovellukselle TCP-portti
const PORT = process.env.PORT || 8080;

// Määritellään sovelluksen käyttämät hakemistot
app.use(express.static('public'));

// Määritellään sivumallien (templates)
app.engine('handlebars', engine());
app.set('viewengines', 'handlebars');
app.set('views', './views');

// URL-REITITYKS
// -------------

// Kotisivu
app.get('/', (req, res) => {
    let indexData = {
        'weekday': 'maanantai',
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
console.log(`Palvelin käynnissä portissa ${PORT}`);