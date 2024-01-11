"use client"
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../redux/slice';

function Page() {
    const userData = useSelector((data) => data.userData.users);
    const dispatch = useDispatch();
    return (
        <div>
            <h3>User List</h3>
            {
                userData.map((item) => (
                    <div key={item.id}>{item.name}
                        <button onClick={() => dispatch(removeUser(item.id))}>Remove</button>
                    </div>
                ))}
        </div>
    );
}

export default Page;