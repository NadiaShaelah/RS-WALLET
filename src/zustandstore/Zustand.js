import React from 'react'


import { create } from 'zustand'

const useStore = create(set => ({
    userPassword : ["aaa", "bbb", "ccc", "ddd"],
    addUserPassword : () => set(state => ({userPassword : [...state.userPassword, state.userPassword]}))
}))

function BearCounter() {
    const userPassword = useStore((state) => state.userPassword)
    return <h1>{userPassword} around here...</h1>
}
  
function Controls() {
    const addUserPassword = useStore((state) => state.addUserPassword)
    return <button onClick={addUserPassword}>one up</button>
}

/*import { create } from "zustand";
import { passwordGlobale } from '../Pages/Auth/PasswordPage/Login';

function Zustand() {

    const useStore = create(set => ({
        userPassword : ["aaa", "bbb", "ccc", "ddd"],
        addUserPassword : () => set(state => ({userPassword : [...state.userPassword, state.userPassword]}))
    }))

    const getUserPassword = useStore(state => state.userPassword);
    const addUserPassword = useStore(state => state.addUserPassword);

    for(let i = 0; i < getUserPassword.length; i++) {
        // console.log(getUserPassword[i]);
        if(getUserPassword[i] === "aaa") {
            console.log("Yesssss,this item exist in useStore");
        }
    }

    return (
        <div>
            <h1>{getUserPassword.map((ee)=>
            (
                <li>{ee}</li>
            ))}</h1>
            <h2>{addUserPassword}</h2>
            <p>{passwordGlobale.map((elt)=>(
                <li>{elt}</li>
            ))}pppp</p>
        </div>
    )
}

export default Zustand*/