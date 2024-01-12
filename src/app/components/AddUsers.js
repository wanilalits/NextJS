"use client"
import React, { useState,useEffect } from 'react';
import { addUser, addinitialData } from '../redux/slice'
import { useDispatch } from 'react-redux'
import components from './components.module.css';
function AddUsers() {
const [name, setName] = useState("");
const [adderss, setAdderss] = useState({ myaddress: '' });
const dispatch = useDispatch();
const userDispatch = () => {
dispatch(addUser([name, adderss])) }
let users
useEffect(()=>{
    (
users= JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : [],
dispatch(addinitialData(users))
)
}, [] )



    return (
        <div className={components.outerBorder}>
            <h1>Add Users and Address as Object in Redux</h1>
            <input type='text'
                onChange={(e) => (setName(e.target.value))} 
                className="add-user-input" 
                placeholder='Add New User'>
            </input>

            <input type='text'
                onChange={(e) => setAdderss({ ...adderss, myaddress: e.target.value })}
                className="add-user-input"
                placeholder='Add New address'>
            </input>

            <button onClick={userDispatch}>Add</button>
            <br></br>
            Name is:-{name} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Adderss is:{adderss.myaddress}
        </div>
    );
}

export default AddUsers;
