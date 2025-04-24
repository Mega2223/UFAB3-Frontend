import("./Login.css")

export default function Login(){
    return(
        <div id="center">
            <div>
                <p id="title">Login</p>
                <div>
                    <p>Email</p>
                    <input/>
                </div>
                <div>
                    <p>Senha</p>
                    <input/>
                </div>
                <div>
                    <button>Login</button>
                </div>
            </div>
        </div>
    )
}