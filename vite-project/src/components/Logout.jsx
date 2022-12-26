import React from 'react'
import '../App.css'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/userSlice';

function Logout () {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())  
    }

    return (
        <div>
            <h1>Logout</h1>

            <div className="card">
                <button onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </div>

    )
}
export default Logout