import React from 'react';
import './Table.scss';

const Table = ({headers, children}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                {
                    headers.map(header => {
                        return (
                            <th key={header}>{header}</th>
                        )
                    })
                }
                </tr>
            </thead>
            <tbody>
                { children }
            </tbody>
        </table>
    )
};

export default Table;