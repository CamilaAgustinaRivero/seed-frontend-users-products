import React from 'react';

const InputText = ({...props}) => (
    <div>
        <label>
            {props.label && <div>{props.label}</div>}
            <input
            type = 'text'
            {...props}/>
        </label>
    </div>
);

export default InputText;