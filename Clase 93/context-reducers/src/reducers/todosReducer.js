export const TODOS_INIT = 'INIT';
export const TODOS_UPDATE_CHECK = 'UPDATE_CHECK';

export default (state, action) => {
    switch(action.type) {
        case TODOS_INIT:
            return action.todos;
        case TODOS_UPDATE_CHECK:
            return state.map(todo => {
                if(todo.id === action.id) todo.checked = action.checked;
                return todo;
            });
        default: 
            return state;
    }
};
