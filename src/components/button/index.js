import React from "react";
import * as S from './styled';

const Button = (props) => {
    return (
        <S.Button 
            onClick={props.onClick} 
            className={props.className}
            {...props}
        >
            {props.children}
        </S.Button>
    );
};

export default Button;