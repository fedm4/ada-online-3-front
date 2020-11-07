import React, {useState} from 'react'
import './App.scss';
import {signInWithGoogle} from './services/firebase';
import Header from './components/Header';
import Chat from './components/Chat';

function App() {
  const [user, setUser] = useState();

  const signIn = () => signInWithGoogle().then(user => {setUser(user); console.log(user)});

  return (
    <div className="App">
      <Header signIn={signIn} user={user} />
      { user ? <Chat uid={user.uid} photoUrl={user.photoURL} /> : null }
    </div>
  );
}

export default App;


  //const [messages, setMessages] = useState([]);

  /*useEffect(() => {
    if(user) {
      getMessages().then(messages => setMessages(messages));
    } else {
      setMessages([]);
    }
  }, [user]);*/

  //const [messages] = useCollectionData(query)
