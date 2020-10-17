import React, {useContext, useState} from 'react';
import Modal from '../Modal/Modal';
import TodoContext from '../../contexts/TodoContext';
import {createTodo} from '../../services/todosServices';
import {TODOS_ADD} from '../../reducers/todosReducer';

const TodoModal = () => {
    const {setShowTodoModal, todosDispatch} = useContext(TodoContext);
    const [inputTitle, setInputTitle] = useState("");
    const [inputContent, setInputContent] = useState("");

    const submit = async () => {
        const todo = await createTodo(inputTitle, inputContent);
        todosDispatch({type: TODOS_ADD, todo});
        close();
    };

    const close = () => setShowTodoModal(false);

    return (
        <Modal title="Add Todo" close={close}>
            <input type="text" placeholder="Title" onChange={e => setInputTitle(e.target.value)} />
            <input type="text" placeholder="Content" onChange={e => setInputContent(e.target.value)} />
            <button type="button" onClick={submit}>Submit</button>
        </Modal>
    )
};

export default TodoModal;
