import React from 'react';

import style from './button.module.scss';

const Button = () => {
    return (
        <button className={style.root} data-testid="button-component">
            hello
        </button>
    );
};

export default Button;
