import React from 'react';
import {Link, Route, useHistory} from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
width: 100vw;
display: flex;
justify-items: space-between;
align-items: space-between;

`;

const Nav = (props) => {
    const handleLogout = () => {
       
        localStorage.removeItem('token');
        props.setLoginStatus=(false);
        console.log(localStorage.getItem('token'));
       props.history.push('/login')
    }

return (
<NavContainer>
    <p>FRIENDS DATABASE</p>
    {props.isLoggedIn ? <Link onClick={() => handleLogout()}>LOGOUT</Link> : <Link to='/login'>LOGIN</Link> }
    <Link to='/friendList'>FRIENDLIST</Link>
    <Link to='/addFriend'>ADD FRIEND</Link>
    
</NavContainer>    
)

}


export default Nav;