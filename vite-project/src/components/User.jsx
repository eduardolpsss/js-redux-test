import React from 'react'
// import '../App.css'
import { useSelector } from 'react-redux'


function User () {
    const {name} = useSelector(state => state.user)

    return (
        <div>
            <h1>User</h1>

            <div className="card">
                <h1>Usuário: {name}</h1>
            </div>
        </div>

    )
}
export default User