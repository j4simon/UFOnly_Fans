const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log(`listening on port ${app.get('port')}`)
});