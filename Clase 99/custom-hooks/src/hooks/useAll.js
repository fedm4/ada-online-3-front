import {useReducer} from 'react';

const useAll = () => {
    const reducer = (state, action) => {
        switch(action.type) {
            case "SUMAR": 
                return state + action.value;
            case "RESTAR":
                return state - action.value;
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, 0);

    const sumarUno = () => dispatch({type: 'SUMAR', value: 1})
    const sumarDiez = () => dispatch({type: 'SUMAR', value: 10})
    const restarUno = () => dispatch({type: 'RESTAR', value: 1})
    const restarDiez = () => dispatch({type: 'RESTAR', value: 10})


    return {
        numero: state,
        sumarUno,
        sumarDiez,
        restarUno,
        restarDiez
    };

};

export default useAll;
