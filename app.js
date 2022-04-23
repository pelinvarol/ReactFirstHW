import axios from "axios";

const getData = async (user_id) => {
    const {data : users} = await axios(
        "https://jsonplaceholder.typicode.com/users/" + user_id
    );

    const { data : posts } = await axios(
        "https://jsonplaceholder.typicode.com/posts?userId=" + user_id
    );

    console.log("Users", users)
    console.log("Posts", posts)
}

export default getData;



