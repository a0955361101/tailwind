import { useContext } from "react";
import { ColorContext } from "../contexts/StateProvider";
function Tag({ color, children }) {
    const Color = useContext(ColorContext);
    const { setBgColor, setTxtColor, setBorderColor, setBtnColor } = Color;

    const handleColor = (children) => {
        switch (children) {
            case 'A':
                setTxtColor('text-angular');
                setBgColor('hover:bg-angular');
                setBorderColor('#C3002F');
                setBtnColor('hover:shadow-angular-btn');
                break;
            case 'V':
                setTxtColor('text-vue');
                setBgColor('hover:bg-vue');
                setBorderColor('rgb(66, 184, 131)');
                setBtnColor('hover:shadow-vue-btn');
                break;
            case 'R':
                setTxtColor('text-react');
                setBgColor('hover:bg-react');
                setBorderColor('#61dafb');
                setBtnColor('hover:shadow-react-btn');
                break;
            default:
                setTxtColor('text-react');
                setBgColor('hover:bg-react');
                setBorderColor('#61dafb');
                setBtnColor('hover:shadow-react-btn');
        }

    };
    return (<div className={`w-5 h-5 ${color} flex justify-center items-center rounded-full cursor-pointer font-bold  mr-3`} onClick={() => handleColor(children)}>
        {children}
    </div>);
}

export default Tag;