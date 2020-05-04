import React from 'react';

const ProductsTable = ({documents, headers}) => (
    <table>
        <thead>
            <tr>
                {headers && headers.map((header, i) =>(<th key={i}> {header.label} </th>))}
            </tr>
        </thead>

        <tbody>
            {documents && headers && documents.map((document, m) =>
                <tr key={m}>{headers.map((header,j) => (<td key={j}> {document[header.key]} </td>))}</tr>
            )}
        </tbody>
    </table>
);

export default ProductsTable;