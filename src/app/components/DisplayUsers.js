"use client"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser, updateUser } from '../redux/slice';
import Link from 'next/link';
import components from './components.module.css'
import '../style.css'
function DisplayUsers() {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [updateID, setUpdateID] = useState("-1");
    
    const userData = useSelector((data) => data.userData.users);
    const dispatch = useDispatch();

    const userDispatch = (id) => {
        console.log(name, address)
        dispatch(updateUser([id, name, address]))
        setUpdateID(-1)
    }

    const updatedate = (id, name, address) => {
        setUpdateID(id)
        setName(name)
        setAddress(address)
    };

    return (
        <div className={ components.outerBorder }>
            <h3 style={{ textAlign: 'center' }}>User List</h3>
            <div  className={components.myborder}>
                <table className="container" >
                    <thead  >
                        <tr   >
                            <th style={{  border: '1px solid black' }}>
                                id
                            </th>
                            <th  style={{  border: '1px solid black' }}>
                            Payload id
                            </th>
                            <th style={{  border: '1px solid black' }}>
                                Name
                            </th>
                            <th style={{  border: '1px solid black' }}>
                              Address
                            </th>
                            <th style={{  border: '1px solid black' }}>
                             Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userData.map((item, id) => (
                                updateID === item.id ?
                                    <tr key={item.id} >
                                        <td style={{  border: '1px solid black' }} >{id}</td>
                                        <td style={{  border: '1px solid black' }}>{item.id}</td>
                                        <td style={{  border: '1px solid black' }}> <input className={components.myinput} type='text' onChange={(e) => (setName(e.target.value))} defaultValue={item.name} placeholder='update User' />  </td>
                                        <td style={{  border: '1px solid black' }}> <input className={components.myinput} type='text' onChange={(e) => (setAddress(e.target.value))} defaultValue={item.address} placeholder='update Address' />  </td>
                                        <td style={{  border: '1px solid black' }}> <button onClick={() => userDispatch(item.id)}>Update</button>
                                            <button onClick={() => dispatch(removeUser(item.id))}>Remove</button>  </td>
                                    </tr>
                                    : <tr key={item.id}>
                                        <td style={{  border: '1px solid black' }}> {id} </td>
                                        <td style={{  border: '1px solid black' }}> {item.id} </td>
                                        <td style={{  border: '1px solid black' }}> {item.name} </td>
                                        <td style={{  border: '1px solid black' }}> {item.address} </td>
                                        <td style={{  border: '1px solid black' }}><button onClick={() => updatedate(item.id, item.name, item.address)}> Edit</button>
                                            <button onClick={() => dispatch(removeUser(item.id))}>Remove</button> </td>
                                    </tr>
                            ))}
                    </tbody>
                </table>
            </div>
            <br></br>
            <Link href={"/RemoveUser"}> Rrmove User</Link>
            <br></br>
            <Link href={"/components/APIcall"}> API Call</Link>
        </div>
    );
}
export default DisplayUsers;