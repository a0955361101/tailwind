import Tag from "./Tag";
import LoginWrap from "./LoginWrap";

function Login() {

    return (
        <>
            <div className="absolute top-3 flex items-center">
                <Tag color={'bg-angular'} >A</Tag>
                <Tag color={'bg-vue'}  >V</Tag>
                <Tag color={'bg-react'}  >R</Tag>
            </div>
            <LoginWrap />
        </>

    );
}

export default Login;