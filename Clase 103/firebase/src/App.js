import React, {useState, useEffect} from 'react'
import './App.scss';
import Header from './components/Header';
import Chat from './components/Chat';
import Login from './components/Login';


function App() {
  const [user, setUser] = useState();
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const openSesamo = () => setShowLogin(true)

  const saveUserData = user => localStorage.setItem("user", JSON.stringify(user));

  useEffect(() => {
    if(user && keepSignedIn){
      saveUserData(user);
    }
  }, [user])

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);
  }, []);

  return (
    <div className="App">
      <Header signIn={openSesamo} user={user} setUser={setUser}/>
      { user ? <Chat uid={user.uid} photoUrl={user.photoURL} /> : null }
      { showLogin ? <Login setUser={setUser} setShowLogin={setShowLogin} setKeepSignedIn={setKeepSignedIn} keepSignedIn={keepSignedIn} /> : null }
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
