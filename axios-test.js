// const axios = require('axios');

// async function getUser() {
//     try {
//         const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
//         console.log(response);
        
//     } catch (error) {
//         console.log("error");
        
//     }
// }
// getUser();

// GET request for remote image in node.js

import axios from 'axios';
const response = await axios({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/todos",
    responseType: "json",
  });

console.log(response.data)