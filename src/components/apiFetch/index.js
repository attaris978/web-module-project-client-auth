

const login = async (creds) => {
    const {username, password} = creds;
    const token = await fetch('http://localhost:9000/api/login', {
    method: 'POST',
    body: JSON.stringify({
        username,
        password
    }),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(json => json.token);
localStorage.setItem('token', token);
console.log(token, localStorage.getItem('token'));
return token;
};

const logout = async (token) => {
    const confirmation = await fetch('http://localhost:9000/api/logout', {
    method: 'POST',
    headers: {
        'Authorization': token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(json => json);
return confirmation;
};

const getFriends = async (token) => {
    const friends = await fetch('http://localhost:9000/api/friends', {
    method: 'GET',
    headers: {
        'Authorization': token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(json => json);
return friends;
};

const getFriend = async (token, id) => {
    const friend = await fetch(`http://localhost:9000/api/friends/${id}`, {
    method: 'GET',
    headers: {
        'Authorization': token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(json => json);
return friend;
};

const addFriend = async (token, friend) => {
    const {name, age, email} = friend;
    const postRequest = await fetch('http://localhost:9000/api/friends', {
    method: 'POST',
    headers: {
        'Authorization': token,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify( {
        id: Date.now(),
        name,
        age,
        email
    })
})
.then(response => response.json())
.then(json => json);
return postRequest;
};

export {login, logout, getFriends, getFriend, addFriend};
