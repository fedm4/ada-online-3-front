export const ACTION_ADD = "ADD";
export const ACTION_REMOVE = "REMOVE";
export const ACTION_EDIT = "EDIT";

export const reducer = (state, action) => {
  switch(action.type) {
    case ACTION_ADD:
      return [...state, action.payload]; // hago un clon y agrego un objeto mas al final
    case ACTION_REMOVE:
      return state.filter(user => user.id !== action.id);
    case ACTION_EDIT:
        return state.map(user => {
            if(user.id === action.payload.id) {
                user.name = action.payload.name;
                user.age = action.payload.age;
            }
            return user;
        });
    default:
      return state; // devuelvo el state exactamente igual sin modificar
  }
}
