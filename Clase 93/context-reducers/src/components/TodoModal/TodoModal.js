import React, {useContext} from 'react';
import Modal from '../Modal/Modal';
import TodoContext from '../../contexts/TodoContext';

const TodoModal = () => {
    const {setShowTodoModal} = useContext(TodoContext);
    return (
        <Modal close={e=>setShowTodoModal(false)}>

        </Modal>
    )
};

export default TodoModal;