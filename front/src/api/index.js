import axios from 'axios';
const url='http://localhost:5000/posts';
export const fetchPosts=()=>fetch(url);
 export const createPost=(newPost)=>axios.post(url,newPost);
// export const createPost=(newPost)=>fetch(url,
// {
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       method: "POST",
//       body: JSON.stringify(newPost)
// })
// .then(function(res){ console.log(res) })
