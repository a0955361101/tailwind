import { useState } from "react";
import { useContext } from "react";
import { ColorContext } from "../contexts/StateProvider";

function LoginBody() {
    const Color = useContext(ColorContext);
    const { txtColor } = Color;
    const [userFocus, setUserFocus] = useState(false);
    const [passFocus, setPassFocus] = useState(false);
    const [userValue, setUserValue] = useState('');
    const [passValue, setPassValue] = useState('');
    const focusUserInput = () => {
        setUserFocus(true);
    };
    const blurUserInput = () => {
        setUserFocus(userValue === '' ? false : true);
    };
    const focusPassInput = () => {
        setPassFocus(true);
    };
    const blurPassInput = () => {
        setPassFocus(passValue === '' ? false : true);
    };

    const userValueChange = (e) => {
        setUserValue(e.target.value);
    };
    const PassValueChange = (e) => {
        setPassValue(e.target.value);
    };
    return (<>
        <div className="border-b relative mb-7" >
            <input type="text" name="Username" required="" className="bg-transparent pb-1 w-full outline-0 text-white" onFocus={() => focusUserInput()} onBlur={() => blurUserInput()} value={userValue} onChange={(e) => userValueChange(e)} />
            <label className={`text-white absolute left-1 pointer-events-none ${userFocus ? `-top-5 text-xs ${txtColor}` : ''}  `} style={{ transition: '.5s' }}>Username</label>
        </div>
        <div className="border-b relative" >
            <input type="text" name="Password" required="" className="bg-transparent pb-1 w-full outline-0 text-white" onFocus={() => focusPassInput()} onBlur={() => blurPassInput()} onChange={(e) => PassValueChange(e)} />
            <label className={`text-white absolute left-1 pointer-events-none ${passFocus ? `-top-5 text-xs ${txtColor}` : ''}`} style={{ transition: '.5s' }}>Password</label>
        </div>
    </>
    );
}

export default LoginBody;