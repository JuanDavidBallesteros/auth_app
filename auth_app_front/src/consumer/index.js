const baseUrl = "http://localhost:2000/users"

const consumer = {
  getUsers: (response) => {
    fetch(baseUrl, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
      }).then((response) => response.json())
      .then((data) => response(data));
  },

  getUser: (id, response) => {
    fetch(`${baseUrl}/${id}`, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
      }).then((response) => response.json())
      .then((data) => response(data)); 
  },

  deleteUser: (id, response) => {
    fetch(`${baseUrl}/${id}`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
    }).then((response) => response.json())
    .then((data) => response(data));
  },

  sendUser: (user, response) => {
    fetch(baseUrl, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user) // body data type must match "Content-Type" header
      }).then((response) => response.json())
      .then((data) => response(data));
  },

  authenticateUser: (credentials, response) => {
    fetch(`${baseUrl}/auth`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials) 
    }).then((response) => response.json())
    .then((data) => response(data));
  },
};

export default consumer;
