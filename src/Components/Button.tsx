import React from "react";
import '../StyleSheet/Button.css';

interface ButtonProps{
    children: any
    handleClic(value:string): void;
}

const Button: React.FC<ButtonProps> = (props) =>{
    
    const isOperator = (value: string) => {
        return isNaN(Number(value)) && (value !== '.') && (value !== '=');
    }

    return (
        <div className = {`Button-container ${isOperator(props.children) ? 'Operator' : ''}`.trimEnd()}
        onClick={() => props.handleClic(props.children)}>
            {props.children}
        </div>
    );
};


export default Button;