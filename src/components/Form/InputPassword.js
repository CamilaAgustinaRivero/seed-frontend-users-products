import React from 'react';

const InputPassword = ({...props}) => (
    <div>
        <label>
            {props.label && <div>{props.label}</div>}
            <input
            type = 'password'
            {...props}/>
        </label>
    </div>
);

export default InputPassword;