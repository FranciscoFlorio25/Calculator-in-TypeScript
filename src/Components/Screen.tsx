import React from 'react';
import '../StyleSheet/Screen.css';

interface ScreenProps{
    input:string
}

const Screen: React.FC<ScreenProps> = (props) => {
    return(
        <div className= 'input'>
            {props.input}
        </div>
    )
}


export default Screen;