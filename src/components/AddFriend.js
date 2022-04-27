import React, {useState} from 'react';
import {addFriend} from './apiFetch';

const AddFriend = (props) => {

    const [friend, setFriend] = useState({
        name:'',
        email:''
    });

    const handleSubmit = e => {
        e.preventDefault();
        addFriend(localStorage.getItem('token'),friend);
        props.history.push('/friendList');
    }

    return (
        <div>
            <form onSubmit={ e => handleSubmit(e)}>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' value={friend.name} onChange={e => setFriend({...friend, name: e.target.value})} />
            <label htmlFor='email'>Email:</label>
            <input type='email' name='email' value={friend.email} onChange={ e => setFriend({...friend, email: e.target.value})} />
            <button type='submit'>Add New Friend!</button>
            </form>
        </div> 
    )
}

export default AddFriend;