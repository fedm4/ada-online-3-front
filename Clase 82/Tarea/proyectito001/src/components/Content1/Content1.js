import React from 'react';
import Kawaii1 from './kawaii1.png';
import Kawaii2 from './kawaii2.png';
import Kawaii3 from './kawaii3.png';

import './Content1.scss';

const Content1 = ({setInputText}) => {
    const datos = [
        {id: 1, titulo: "Kawaii 1", icon: Kawaii1 },
        {id: 2, titulo: "Kawaii 2", icon: Kawaii2 },
        {id: 3, titulo: "かわいい 3", icon: Kawaii3 }
    ];
    return (
        <React.Fragment>
            <div className="content-1">
                <input type="text" onChange={e => setInputText(e.target.value)}/>
            </div>
            <div className="kawaii-container">
                {
                    datos.map(item => {
                        return (
                            <div key={item.id} className="mini-card">
                                <header>{item.titulo}</header>
                                <img src={item.icon} />
                            </div>
                        );
                    })
                }
            </div>


        </React.Fragment>
    )
};

export default Content1;