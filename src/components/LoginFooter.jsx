import { useContext } from "react";
import { ColorContext } from "../contexts/StateProvider";
function LoginFooter() {
    const Color = useContext(ColorContext);
    const { bgColor, txtColor, borderColor, btnColor } = Color;
    const handleStop = (e)=>{
        e.preventDefault()
    }
    return (
        <>
            <div className="w-full text-start">
                <a href="/" className={`${txtColor} py-2 px-5 block my-12 ${btnColor} hover:text-white ${bgColor} hover:rounded-md w-32 text-center relative overflow-hidden`} onClick={(e)=>handleStop(e)}>
                    <span className="absolute block top-0 w-full h-2 -left-0 animate-[btn1_1s_linear_infinite]" style={{
                        background: `linear-gradient(90deg, transparent,  ${borderColor})`,

                    }}></span>
                    <span className="absolute block right-0 w-2 h-full top-0 animate-[btn2_1s_linear_infinite] " style={{
                        background: `linear-gradient(180deg, transparent, ${borderColor})`,
                        animationDelay: '.25s'
                    }}></span>
                    <span className="absolute block w-full h-2 bottom-0 -right-0 animate-[btn3_1s_linear_infinite]" style={{
                        background: `linear-gradient(270deg, transparent, ${borderColor})`,
                        animationDelay: '.5s'
                    }}></span>
                    <span className="absolute block -bottom-0 left-0 w-2 h-full animate-[btn4_1s_linear_infinite]" style={{
                        background: `linear-gradient(360deg, transparent, ${borderColor})`,
                        animationDelay: '.75s'
                    }}></span>
                    Submit
                </a>
            </div>
        </>
    );
}


export default LoginFooter;