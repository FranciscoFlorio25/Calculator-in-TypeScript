import React, { MouseEventHandler } from 'react';
import '../StyleSheet/ClearButton.css';

interface ClearButtonProps{
    children: any;
    handleClic: MouseEventHandler<HTMLDivElement>;

}

const ClearButton: React.FC<ClearButtonProps> = (props) => {
    return ( 
        <div className = 'button-clear' onClick={props.handleClic}>
            {props.children}
        </div>
    );

}


export default ClearButton;