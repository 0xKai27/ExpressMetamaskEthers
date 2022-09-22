const { ethers } = require("ethers");

// Get the provider and signer from the browser window
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();

// Initialise the document objects
const sendETH = document.querySelector('#sendETH');
const addressTo = document.querySelector('#addressTo');
const ETHAmount = document.querySelector('#ETHAmount');

sendETH.addEventListener('submit', async(e) => {
  e.preventDefault();

  // Get the form values
  const addressToValue = addressTo.value;
  const ETHAmountValue = ETHAmount.value;
  // Calculate amount ot transfer in wei
  const weiAmountValue = parseInt(ETHAmountValue) * 10**18;

  // Form the transaction request for sending ETH
  let transactionRequest = {
    to: addressToValue.toString(),
    value: weiAmountValue.toString()
  }

  // Send the transaction and log the receipt
  const receipt = await signer.sendTransaction(transactionRequest);
  console.log(receipt);

})

