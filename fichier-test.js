
const ethers = require("ethers");
const { Web3 } = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider("https://eth-goerli.g.alchemy.com/v2/zCeQuHRZxylPkCVxv4T6n-fe3ubmcJj4"));
const CryptoJS = require("crypto-js");


const table = [{"selectedAddressId":"0xfc01d51ca4e4C798C2c1Ea0DA6b68A39f8974030",
"accountAddresses":[{"addressName":"Principal account","address":"0xfc01d51ca4e4C798C2c1Ea0DA6b68A39f8974030","balance":0}],
"userPassword":"$2a$08$4XeriZllbt.XUZV9q4S74ujgiiZRQpARwGAraedHibKVn1WvUEz.C",
"userSeedPhrase":"U2FsdGVkX1/gcj8wUyywXEPDKUSlCZ6ZhB9XnvdDezm5fUZOFk8kaO8SYB8cHcOpdWjLZRx/c4e724UC36nwl6zRALhIj9y+Wabm+9ceyWdQFuZDvuXcRLJo/U9fGOJN",
"userAccountAddress":"0xfc01d51ca4e4C798C2c1Ea0DA6b68A39f8974030",
"userPrivateKey":"U2FsdGVkX19GKKlfN2uOCVklMoPsNTFpHmX0A5T0N90z0XZf+pudKFo/zPUv/u944osjazjqAkujRuABGVCGGBfacatbL0uLEMckXRU2BX9Mx61n4zt+wXYFuLpGJSQZ",
"tokensImported":[],
"id":1}]

for(let i = 0; i < table.length; i++) {
    if(table[i].id === 1) {
        // console.log(table[i].id);
        // console.log(table[i].userAccountAddress);
    }
}

/*const wallet = ethers.Wallet.createRandom();

const wallet_account_address = web3.utils.toChecksumAddress(wallet.address);
let accountCreated_Balance = await web3.eth.getBalance(wallet.address); //pourquoi 0 ?
let accountCreated_Balance_Nub = Number(accountCreated_Balance);*/

let i = [null, null, null, null, null, null, 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', 'LINK', null, null, null, null, null, null, 'DAI', 'DAI']

const data = i.map((token, index) => {
    if(token===null)
        return token
})
// console.log(data);

/*for(let k = 0; k < i.length; k++) {
    if(i[k] != null){
        console.log(i[k]);
    }
    // else {
    //     console.log(i[k]);
    // }
}*/

let userlogged = {
    "selectedAddressId":"0x9CaF063c94e20705969f6a4D5de56c43858295E0",
    "accountAddresses":[{"addressName":"Principal account","address":"0x9CaF063c94e20705969f6a4D5de56c43858295E0","balance":0}],
    "userPassword":"$2a$08$ZCWrJtyzdc96d711EhzwS.AI4mekF2wbYOjk3Rd6pwvDPHa/QwVIa",
    "userSeedPhrase":"U2FsdGVkX18v271ow2nUp/RY1S9H3RNbw8AI/k5qjqwcIt3cbmouRKWgk4ISmwhsgWzVKNC8+4sZl05MpNjA8mmjj+J3RrmvQn+V2V/HIJSOSPW3KAIbWAhLQmTeb4QaOd/SJmzvov866zaQFKlu0g==",
    "userAccountAddress":"0x9CaF063c94e20705969f6a4D5de56c43858295E0",
    "userPrivateKey":"U2FsdGVkX18f26X9rgPMzNKrfKg7X+eu/BIpgh1L7/Xed5qbA9i5l4Q1FQNQ9ax8vWO7++PsxKlSbMH0RRRHUTi/NZLIyFu6/Pc8Ld0Gp3y6sxP88g6iv/GbmF2StlDL",
    "tokensImported":[],
    "id":1
}

for(let item in userlogged) {
    // console.log(item);
}

// const wallet = ethers.Wallet.createRandom();
// console.log(wallet);
// const privatekey = wallet.privateKey;
// console.log(privatekey);
let privateKey = "0xcf72f22063b67c91b9e8edc45d62719acdd070d2c49e796fb57eabe802403233";//6482c80a36dc541bfe09c1ae280707717288bf98bd6076f949671989b563139a 0x0123456789012345678901234567890123456789012345678901234567890123
let wallet = new ethers.Wallet(privateKey);
// console.log(wallet);

let mnemonic = "radar blur cabbage chef fix engine embark joy scheme fiction master release";
let mnemonicWallet = ethers.Wallet.fromPhrase(mnemonic) //.fromMnemonic(mnemonic);
// console.log(mnemonicWallet);

// 0x2EB51B473f0cBC67Ce405953f00a5844Df94f7E9 : titi
/*0x4d4B52A1a7DF0880826650234e180C40E02389dd : souley
    privatekey: 0x79ac78b52ce4cd38344dac7f3b1b8cb10d6fce2fac718a59b23d4360c368558b
*/

// monnouveaumetamask2023
// 0x6482c80a36dc541bfe09c1ae280707717288bf98bd6076f949671989b563139a
/**
 * 0xD441858F0776183775570f13e6db8583Bf1fe104 : nadia
 * seedph : high pulse almost move music profit silver jar injury stone sand twice
 * 
 * 0x59AB3f73bD515522c2ad48A20540dCF64AC8c1A2 : titi
 * seedph : industry stereo shadow rich script next you kite reform extend dream grape
 * 
 * 0x322fb4d3611180cf62A7C7c2CB843CC667f9a536 : lael
 * seedph : job lion wrong category kidney chunk simple payment uniform castle enemy imitate
 */


// let log = CryptoJS.AES.decrypt("U2FsdGVkX1+Xr2+82HwXvkTa0ME25t9N7Q97QKD6Hu7RADaa3xMI/HJUnbxd0OIyKoOkIBcwvKQdSv+RVuw7wbMKmElze5TZdOFZCCXEsX6RizsCeipK923S+z2u8r5+")
// console.log(log);

let encrypted = CryptoJS.AES.encrypt("0xcf72f22063b67c91b9e8edc45d62719acdd070d2c49e796fb57eabe802403233", "bonjour").toString()
// console.log(encrypted);

let decrypted = CryptoJS.AES.decrypt("U2FsdGVkX1+Xr2+82HwXvkTa0ME25t9N7Q97QKD6Hu7RADaa3xMI/HJUnbxd0OIyKoOkIBcwvKQdSv+RVuw7wbMKmElze5TZdOFZCCXEsX6RizsCeipK923S+z2u8r5+"
, "souley")
console.log(decrypted.toString(CryptoJS.enc.Utf8));

