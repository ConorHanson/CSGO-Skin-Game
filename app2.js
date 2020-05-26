const path = require('path')
const express = require('express')
var request = require("request")

/*const getSkinfo = require('./wyrskin')*/
const app = express()
const publicDirectoryPath = path.join(__dirname, '/public')
var skins_str = "empty"
app.use(express.static(publicDirectoryPath))
/*var string_skin = (JSON.stringify(getSkinfo))*/
app.get('/skin', (req, res) => {

    
    request('https://api.steamapis.com/market/items/730?api_key=abc', { json: true }, (err, response, body) => {
        if (err) { return console.log(err); }
        var skins = []
        var score = 0
        var i;
        for (i = 0; i < body.data.length; i++) {
            var name = body.data[i].market_name
            var price = body.data[i].prices
            var img_url = body.data[i].image
            if (name.includes('Factory New') && !name.includes('StatTrak')) {
                skins.push(name + "," + price.avg + "<" + img_url)

            }
        }
        var num1 = Math.floor(Math.random() * 1215);
        var num2 = Math.floor(Math.random() * 1215);
        var out1 = "A : " + skins[num1] + "&"
        var out2 = "%B : " + skins[num2]

        var mySubString1 = out1.substring(
            out1.lastIndexOf(",") + 1,
            out1.lastIndexOf("^")
        );
        var price1 = parseFloat(mySubString1)

        var mySubString2 = out2.substring(
            out2.lastIndexOf(",") + 1,
            out2.lastIndexOf("^")
        );
        var price2 = parseFloat(mySubString2)


        skins_str = (out1 + " > " + out2)
        console.log(skins_str)
        res.send({ skins: skins_str })
        
     
    })
    
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')



})
