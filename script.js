window.addEventListener('DOMContentLoaded', (event) => {
    const infuraEndpoint = "https://sepolia.infura.io/v3/a2b2c5dbd07641be83b4dddc5d787cb0"; 

    const web3 = new Web3(new Web3.providers.HttpProvider(infuraEndpoint));
    const contractABI = [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "user",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "tokenAddress",
                    "type": "address"
                }
            ],
            "name": "checkBalance",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "balance",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "tokenSymbol",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]; // Replace with your ABI

    const contractAddress = "0xB5b60E1612eF0BB01a9C1CcF337540D169b1C65E";

    const contract = new web3.eth.Contract(contractABI, contractAddress);

    // Event listener for the "Check Balance" button
    document.getElementById('check-balance').addEventListener('click', async () => {
        const userAddress = document.getElementById('wallet-address').value;
        const tokenAddress = document.getElementById('contract-address').value;

        try {
            const result = await contract.methods.checkBalance(userAddress, tokenAddress).call();
            
            document.getElementById('balance-value').innerText = web3.utils.fromWei(result.balance.toString(), 'ether');
            document.getElementById('token-symbol-value').innerText = result.tokenSymbol;

        } catch (err) {
            console.error('Error fetching balance:', err);
        }
    });
});
