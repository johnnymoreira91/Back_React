const express = require('express');
const PORT = 3001;
const path = require('path');
const apiRoutes = require('./src/routes/routes')

const app = express();



app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use('/api', apiRoutes);
app.use("/", express.static(path.join(__dirname, "public")));


//app.get('*', (req,res) => {
//    res.sendFile(path.join(__dirname, "front/build/index.html"))
//})

app.listen(PORT, () => {
    console.log('Servidor Iniciado na porta: ', PORT)
});