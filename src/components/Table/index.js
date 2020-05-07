import React from 'react';
import {Link} from 'react-router-dom';

const Table = ({documents, headers, linkTo}) => (
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
                        {linkTo && (<td> <Link to={`${linkTo}/${document.id}`}>Editar</Link></td>)}
                    </tr>))
            }
        </tbody>
    </table>
);

export default Table;