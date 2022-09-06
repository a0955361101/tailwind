import LoginHeader from "./LoginHeader";
import LoginBody from "./LoginBody";
import LoginFooter from "./LoginFooter";
function LoginWrap() {

    return <div className="w-96 text-center bg-transparent5 px-10 rounded-lg shadow-box" >
        <LoginHeader />
        <LoginBody />
        <LoginFooter />
    </div>;
};

export default LoginWrap;
