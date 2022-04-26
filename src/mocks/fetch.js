

const login = async () => {
    const token = await fetch('http://localhost:9000/api/login', {
    method: 'POST',
    body: JSON.stringify({
        username: 'Bloom',
        password: 'Tech'
    }),
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
.then(response => response.json())
.then(json => json);
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

export {login, logout, getFriends};
