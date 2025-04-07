// pages/Login.tsx
export function Login(){
    return(
        <section className="page">
            <h2 className="page-title">Faça seu Login</h2>
            <div className="square">
                <div className="emailForm">
                <label htmlFor="email">Email</label>
                <br />
                <input type="text" id="email" />
                </div>
                <br />
                <div className="senhaform">
                <label htmlFor="senha">Senha</label>
                <br />
                <input type="text" id="senha" />
                </div>
                <button className="btLogin">Enviar</button>
            </div>
        </section>
    )
}