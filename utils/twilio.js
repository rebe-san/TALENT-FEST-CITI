var twilio = require('twilio');

// Find your account sid and auth token in your Twilio account Console.
var client = new twilio('AC56aef19971988edaf7e954258a58ba5c', 'e4a2e42d2c2765ff2a317264b21af6d9');

// Send the text message.
client.messages.create({
    to: '+526862381196',
    from: '+1 516 986 3015',
    body: 'Hola! Tu código de verificación es: 789622'
});

client.sendMessage()