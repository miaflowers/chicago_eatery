const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://miaflowers:hojbyc-hUzzu9-myzqag@chicagoeatery.aiujr.mongodb.net/chicagoeatery?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});