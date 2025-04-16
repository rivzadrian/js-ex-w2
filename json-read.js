// fetch("https://jsonplaceholder.typicode.com/todos").then((response)=> response.json()).then((json)=>console.log(json));

// https://www.freecodecamp.org/news/how-to-read-json-file-in-javascript/

import fs from 'fs'
var obj = JSON.parse(fs.readFileSync('todos.json', 'utf8'));
console.log(obj);



