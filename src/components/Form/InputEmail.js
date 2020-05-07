import React from 'react';

const InputEmail = ({...props}) => (
    <div>
        <label>
            {props.label && <div>{props.label}</div>}
            <input
            type = 'email'
            {...props}/>
        </label>
    </div>
);

export default InputEmail;