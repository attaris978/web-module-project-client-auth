import React, {useState} from 'react';
import './App.css';
import {Link, Route, useHistory} from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendList from './components/FriendList';
import AddFriend from './components/AddFriend';
import styled from 'styled-components';
import {logout} from './components/apiFetch/';
const NavContainer = styled.nav`
width: 100vw;
display: flex;
justify-items: space-between;
align-items: space-between;

`;


function App() {

const history = useHistory();
const [isLoggedIn, setLoginStatus] = useState(localStorage.getItem('token') ? true : false);
const [friends, setFriends] = useState(null);


const handleLogout = async () => {
  await logout(localStorage.getItem('token'));
  localStorage.removeItem('token');
  setLoginStatus(false);
   history.push('/login')
}


  return (
    <div className="App">
      <NavContainer>
        <p>FRIENDS DATABASE</p>
    {isLoggedIn ? <Link onClick={() => handleLogout()}>LOGOUT</Link> : <Link to='/login'>LOGIN</Link> }
    <Link to='/friendList'>FRIENDLIST</Link>
    <Link to='/addFriend'>ADD FRIEND</Link>
      </NavContainer>
      <Route exact path='/' render={(props) => <Login setLoginStatus={setLoginStatus} history={history} {...props} /> }/>
      <Route path='/login' render={(props) => <Login setLoginStatus={setLoginStatus} history={history} {...props} /> }/>
      <PrivateRoute path='/friendList' component={FriendList} friends={friends} setFriends={setFriends} />
      <PrivateRoute path='/addFriend' component={AddFriend} />
    </div>
  );
}

export default App;
