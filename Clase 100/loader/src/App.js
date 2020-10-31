import React,{useEffect, useState} from 'react';
import './App.css';
import Spinner from './spinner.gif';

const App = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(resData => setData(resData))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
    }, 4000);
  }, []);
    
  return (
    <div>
      {
        loading ?
        <img src={Spinner} alt="Loading..." style={{maxWidth: "400px"}} />:
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map(todo => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.title}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      }

    </div>
  );
}

export default App;
