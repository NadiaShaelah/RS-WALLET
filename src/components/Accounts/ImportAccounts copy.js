import React, { useState, useContext } from 'react'
import { useLocalStorage } from 'usehooks-ts'
import { UserDatasContext } from '../../datasforlocalstorage/usersGlobalContext';
const { Web3 } = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://eth-goerli.g.alchemy.com/v2/zCeQuHRZxylPkCVxv4T6n-fe3ubmcJj4'));


function ImportAccounts() {
    const value = useContext(UserDatasContext);
    const {userPassword, userSeedPhrase, userAccountAddress, userPrivateKey, tokensImported, accountsImported, setUserDatasContext} = value;
  

    const [loggedUser, setLoggedUser] = useLocalStorage('loggedUser', undefined);

    const [accountImportedStates, setAccountImportedStates] = useState()

    const accountImportedDatasFunc = async (e) => {
        console.log(e);
        setAccountImportedStates(e)
    }

    const addNewAccoundImported = async(e) => {
        e.preventDefault()

        let localStorageData = localStorage.getItem("userList");
        localStorageData = await JSON.parse(localStorageData);

        for(let i = 0; i < localStorageData.length; i++) {
            if(localStorageData[i].id === loggedUser.id) {
                setUserDatasContext({accountsImported : accountImportedStates})
                if(accountImportedStates) {
                    let accountImportedDatas = web3.eth.accounts.privateKeyToAccount(accountImportedStates);
                    let importedState_Address = accountImportedDatas.address;
                    localStorageData[i].accountsImported.push(importedState_Address)

                    localStorage.setItem('userList', JSON.stringify(localStorageData))

                    setLoggedUser({
                        ...loggedUser,
                        accountsImported : [...loggedUser.accountsImported, accountImportedStates]
                    })

                    let importedState_PrivateKey = accountImportedDatas.privateKey;
                    let importedState_Balance = await web3.eth.getBalance(importedState_Address);
                    console.log(`Your account imported balance is ${importedState_Balance} ETH.`);
                }
            }
        }
        /*setLoggedUser({
            ...loggedUser,
            accountAddresses: [
                ...accountAddresses,
                {
                    addressName,
                    address: accountCreated_Address,
                    balance: accountCreated_Balance_Nub,
                    privateKey: accountCreated_PrivateKey
                },
            ],
        });*/
    }

    return (
        <div>
            <form className='flex flex-col rounded p-2 container mx-auto w-3/4' onSubmit={e=>addNewAccoundImported(e)}>
                <div className="inputLabel flex flex-col">
                    <label htmlFor="">Entrez la clé privée</label>
                    <input type="text" className='border border-cyan-500 rounded p-1' onInput={e=>accountImportedDatasFunc(e.target.value)}/>
                </div>
                <div className="btns flex justify-between">
                    <button className='border bg-cyan-500 text-white rounded mt-2 p-1'>Annuler</button>
                    <button className='border bg-cyan-500 text-white rounded mt-2 p-1'>Importer</button>
                </div>
            </form>
        </div>
    )
}

export default ImportAccounts