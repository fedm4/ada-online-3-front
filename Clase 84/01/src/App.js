import React, { useEffect, useState } from 'react';
import Post from './components/Post/Post';
import axios from 'axios';
import './App.scss'; 

const App = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  /*const func = () => {
    console.log("POSTS 1", posts);
    setPosts([2]);
    console.log("POSTS 2", posts);
  }*/
  
  const getUsers = async () => {
    try{
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data);
    }catch(err) {
      alert(`Error getting users: ${err}`);
    }
  };

  useEffect(() => {
    getUsers();
  }, [posts]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        setPosts(res.data);

      })
      .catch(err => alert(`Error! ${err}`));
  }, []);

  return (
    <React.Fragment>
      {
        posts.map(post => {
          const user = users.find(user => post.userId === user.id) || {name: "Unknown"};
          return (
            <Post key={post.id} title={post.title} user={user}>
              {post.body}
              <button>Hola soy un boton</button>
            </Post>
          )
        })
      }
      
      {
        //<button type="button" onClick={func}>SETEA POST!</button>
      }
    </React.Fragment>
  );
}

export default App;
