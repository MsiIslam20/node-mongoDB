const express = require('express');

const app = express();

// function getCall(req, res){
//     res.send("thank You very much")
// }

app.get('/', (req, res) => {
    res.send("Thank you very much")
})

app.listen(3000, () => console.log('Listening on port 3000'))