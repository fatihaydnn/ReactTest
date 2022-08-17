// setTimeout(() => { 
//     console.log("Merhaba sen ben biz siz onlar!!")
// }, 2000)

// setInterval(() => {
//     console.log("sabah uyanıyorum efenim");
// },1000)

import fetch from "node-fetch";
import axios from "axios";
import { resolve } from "path";
import { rejects } from "assert";

// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((data) => data.json())
//     .then((users) => console.log(users));

// fetch("https://jsonplaceholder.typicode.com/users")             // sıralama her seferinde farklı gelebilir.
//     .then((data) => data.json())
//     .then((users) => {
//         fetch("https://jsonplaceholder.typicode.com/posts")
//             .then((data) => data.json())
//             .then((posts) => console.log(posts));
//     });

// async function getData(){                                       // Verileri bizim sıraya koyduğumuz şekilde getiriyor.
//     const users = await (await fetch("https://jsonplaceholder.typicode.com/users")).json();
//     const post = await (await fetch("https://jsonplaceholder.typicode.com/posts")).json();

//     console.log(users);
//     console.log(post);
    
// }

// (async () => {                                                      // axios kullanarak verileri çekme.
//     const { data: users } = await axios("https://jsonplaceholder.typicode.com/users");
//     const { data: post } = await axios("https://jsonplaceholder.typicode.com/post");


//     console.log("users",users);
//     console.log("post",post);
// })();

//getData();


const getComments = (number) => {
    return new Promise((resolve,rejects) => {
        if(number === 1){
            resolve("Başarılı");
        }
        
        rejects("Bir porblem oluştu!!");
    });
};

getComments(2)
    .then((data) => console.log(data))
    .catch((e) => console.log(e));