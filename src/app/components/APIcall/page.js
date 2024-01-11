
"use client"
import { useDispatch, useSelector } from "react-redux"
import { fetchApiUsers } from "../../redux/slice"
import { useEffect } from "react";

function page(props) {
    const dispatch = useDispatch();

    //const apiUserData= useSelector((data)=>data.usersData.userAPIData);
    const apiUserData = useSelector((data) => data.userData.userAPIData);
    console.log(apiUserData)
    useEffect(() => {
        dispatch(fetchApiUsers())
    }, [])
    return (
        <div>
            <h1>User list from API</h1>
            <button onClick={() => dispatch(fetchApiUsers())}> get api data</button>

            {
                apiUserData.length >= 1 && apiUserData.map((item) => (
                    <h2 key={item.id}>{item.name}</h2>
                ))
            }
        </div>
    )
}

export default page;