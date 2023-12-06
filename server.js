
const express = require('express');
const app = express();
const port = 3000;
const magicResponse =["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

//for greeting
app.get('/greeting/:name', (req, res) => {
	console.log(req.params);
	res.send('Hello ' + req.params.name + "! It's so great to see you! " );
});

//Tip calculator
app.get('/tip/:total/:tipPercentage', (req, res) => {
	console.log(req.params);

	res.send('The tip amount for ' + req.params.total + ' is' +((req.params.total*req.params.tipPercentage)/100));
});


//magic 8 ball:
app.get('/magic/:question', function(req, res) {
    // req.params.question.replace(/%20/g, ""); this is used to replace the space with /%20. but we don't need to use this because 
    //https will automatically replaces the spaces with/%20
    res.send('The question you asked is  ' +`<h2>${req.params.question}</h2> my Answer is  <h1>${magicResponse[Math.floor(Math.random()*magicResponse.length)]}</h1>`);
  });

app.listen(port, () => {
    console.log('listening on port', port);
})
