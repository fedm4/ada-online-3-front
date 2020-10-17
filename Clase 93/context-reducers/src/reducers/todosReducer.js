export const TODOS_INIT = 'TODOS_INIT';
export const TODOS_UPDATE_CHECK = 'TODOS_UPDATE_CHECK';
export const TODOS_ADD = 'TODOS_ADD';

export default (state, action) => {
    switch(action.type) {
        case TODOS_INIT:
            return action.todos;
        case TODOS_UPDATE_CHECK:
            return state.map(todo => {
                if(todo.id === action.id) todo.checked = action.checked;
                return todo;
            });
        case TODOS_ADD:
            return [...state, action.todo];
        default: 
            return state;
    }
};
