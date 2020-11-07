import React, {useState, useRef, useEffect} from 'react';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {getMessages} from '../services/firebase';
import ChatMessage from './ChatMessage';
import '../scss/Chat.scss';
import {createMessage} from '../services/firebase';

const Chat = ({uid, photoUrl}) => {
    const [input, setInput] = useState("");
    const dummy = useRef();
    const handleInputChange = e => setInput(e.target.value);
    const handleInputKeyUp = e => {
        if(e.keyCode === 13) addMessage();
    }
    const addMessage = () => {
        if(input === "") return;
        createMessage(input, uid, photoUrl)
        setInput("");
        dummy.current.scrollIntoView({ behaviour: 'smooth' })
    }

    // obtengo promesa con query a la db
    const query = getMessages();
    // obtengo state del nuevo hook de firebase
    const [messages] = useCollectionData(query, {idField: 'id'})

    useEffect(() => dummy.current.scrollIntoView({ behaviour: 'smooth' }), [messages])

    return (
        <section id="chat">
            <div id="messages">
                {
                    messages ?
                    messages.map(message => <ChatMessage key={message.id} message={message} uid={uid} />) 
                    : null
                }
                <div style={{height:'20px'}} ref={dummy}></div>
            </div>
            <footer id="message-input">
                <input type="text" value={input} onChange={handleInputChange} onKeyUp={handleInputKeyUp} />
                <button type="button" onClick={addMessage}>Enviar</button>
            </footer>
        </section>
    );

};

export default Chat;
