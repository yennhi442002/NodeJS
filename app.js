const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
const noiDung = {
    "Truong:": "UIT",
    "DiaChi": "Thu Duc"
};

const noiDung2 = {
    "KTX:": "DHQG HCM",
    "DC": "Thu Duc",
    "Khu": "Khu A, Khu B"
};

app.get('/', (req, res) => {
    console.log('Sent information successfully');
    res.send("VuongThiYenNhi_20521721");
})

app.get('/truong', (req, res) => {
    console.log('Sent information successfully');
    res.send(noiDung);
})

app.get('/ktx', (req, res) => {
    console.log('Sent information successfully');
    res.send(noiDung2);
})

const port = process.env.PORT || 3002;

app.listen(port, () => {
  console.log(`I'm listening on port ${port}`);
});
