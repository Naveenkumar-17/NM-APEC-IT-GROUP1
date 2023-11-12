const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/moneytransfer', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const moneyTransferSchema = new mongoose.Schema({
  sender: String,
  receiver: String,
  amount: Number,
});

const MoneyTransfer = mongoose.model('MoneyTransfer', moneyTransferSchema);

app.get('/api/moneytransfers', async (req, res) => {
  const moneyTransfers = await MoneyTransfer.find();
  res.json(moneyTransfers);
});

app.post('/api/moneytransfers', async (req, res) => {
  const newMoneyTransfer = new MoneyTransfer(req.body);
  await newMoneyTransfer.save();
  res.json(newMoneyTransfer);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
