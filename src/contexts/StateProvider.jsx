import React, { useState } from "react";



export const ColorContext = React.createContext();

function StateProvider(props) {
    const { children } = props;
    const [txtColor, setTxtColor] = useState('text-react');
    const [bgColor, setBgColor] = useState('hover:bg-react');
    const [btnColor, setBtnColor] = useState('hover:shadow-react-btn');
    const [borderColor, setBorderColor] = useState('#61dafb');


    return (
        <ColorContext.Provider value={{ btnColor, bgColor, txtColor, borderColor, setTxtColor, setBgColor, setBorderColor, setBtnColor }}>
            {children}
        </ColorContext.Provider>
    );
}

export default StateProvider;

