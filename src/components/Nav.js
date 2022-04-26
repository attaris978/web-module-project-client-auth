import React from 'react';
import {Link, Route} from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
display: flex;

`;

const Nav = () => {

return (
<NavContainer>
    <p>FRIENDS DATABASE</p>
    <Link to='/login'>LOGIN</Link>
    <Link to='/friendList'>FRIENDLIST</Link>
</NavContainer>    
)

}


export default Nav;