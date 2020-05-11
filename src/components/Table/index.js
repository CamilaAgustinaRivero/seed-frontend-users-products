import React from 'react';
import {Link} from 'react-router-dom';

const Table = ({documents, headers, linkTo, onDelete, primaryKey = 'id'}) => (
    <table>
        <thead>
            <tr>
                {headers && headers.map((header, i) =>(<th key={i}> {header.label} </th>))}
                {linkTo && (<th> ACCIONES </th>)}
            </tr>
        </thead>

        <tbody>
            {
                documents && headers && documents.map((document, m) => 
                    (<tr key={m}>{headers.map((header,j) => 
                        (<td key={j}> 
                            {document[header.key]} 
                        </td>))}
                        <td>
                            {linkTo && (<Link to={`${linkTo}/${document[primaryKey]}`}>Editar</Link>)}
                            {onDelete && (<button onClick={() => onDelete(document[primaryKey])}>Borrar</button>)}
                        </td>
                    </tr>))
            }
        </tbody>
    </table>
);

export default Table;