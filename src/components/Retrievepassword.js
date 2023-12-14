import { useContext } from "react";
import { UserDatasContext } from "../datasforlocalstorage/usersGlobalContext";
import React from 'react'

function Retrievepassword() {
    const value = useContext(UserDatasContext);
    const {userPassword, userSeedPhrase, userAccountAddress, userPrivateKey, tokensImported, accountsImported, setUserDatasContext} = value;
    console.log(userPassword);
    return (
        <div>Retrievepassword</div>
    )
}

export default Retrievepassword