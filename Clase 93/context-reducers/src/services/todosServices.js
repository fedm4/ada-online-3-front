import axios from 'axios';

const baseUrl = 'https://5f518d325e98480016123ada.mockapi.io/api/v1/todos/';

export const getTodos = async () => {
    try {
        const res = await axios.get(baseUrl);
        return res.data;
    }catch(err) {
        throw new Error(`Unhandled - getTodos: ${err}`);
    }
}

export const updateTodoCheck = async (todo, checked) => {
    try {
        await axios.put(baseUrl + todo.id, {...todo, checked});
    }catch(err) {
        throw new Error(`Unhandled - updateTodoCheck: ${err}`);
    }
}

export const createTodo = async (title, content) => {
    try {
        const newTodo = {title, content};
        const res = await axios.post(baseUrl, newTodo);
        return res.data;
    }catch(err) {
        throw new Error(`Unhandled - createTodo: ${err}`);
    }
};
