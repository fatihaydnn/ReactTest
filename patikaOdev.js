import axios from "axios";

const getData = async (userId) => {
    const {data:users} = await axios("https://jsonplaceholder.typicode.com/users/"+userId);
    const {data:posts} = await axios("https://jsonplaceholder.typicode.com/posts/"+userId);

    console.log({users,posts});
}

getData(1);