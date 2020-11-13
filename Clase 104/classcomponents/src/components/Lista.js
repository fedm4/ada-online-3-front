import React, { Component } from 'react';

class Lista extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numbers: [0,1,2,3,4,5,6,7,8,9],
            date: new Date(),
        };
    }
    
    componentWillMount() {
        console.log("Componente esta por ser cargado")
    }

    componentDidMount() {
        console.log("Componente se cargo");
    }

    componentWillReceiveProps(nextProps) {
        console.log("Componente recibe props", nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Puedo decirle si el componente debe o no actualizarse", nextProps, nextState);
        if(nextProps.aloha == this.props.aloha) return false; // boolean
        return true;
    }

    componentWillUpdate() {
        console.log("El componente esta por ser actualizado")
    }

    componentDidUpdate() {
        console.log("El componente se actualizo")
    }

    componentWillUnmount() {
        console.log("El componente va a ser desmontado");
    }


    render() {
        return (
            <div>
                <h1>{this.props.aloha} - { this.state.date.toLocaleDateString() }</h1>
                <ul>
                    {this.state.numbers.map(n => (<li>{n}</li>))}
                </ul>
            </div>
        )
    }
}

export default Lista;
