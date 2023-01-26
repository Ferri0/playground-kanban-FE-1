import React from 'react';

import style from './input.module.scss';

type InputProps = {
    label: string;
    placeholder: string;
};

const Input = ({ label, placeholder }: InputProps) => {
    return (
        <label data-testid="label">
            {label}
            <input className={style.root} placeholder={placeholder} data-testid="input" />
        </label>
    );
};

export default Input;
