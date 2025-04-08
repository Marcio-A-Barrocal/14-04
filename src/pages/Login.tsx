// pages/Login.tsx
export function Login(){
    return(
        <section className="page">
            <h2 className="page-title">Faça seu Login</h2>
            <div className="square">
            <form>
                <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" id="email" className="emailForm" />
                </div>
                <br />
                <div className="form-group">
                <label htmlFor="senha">Senha</label>
                <input type="text" id="senha" className="emailForm" />
                </div>
                <button type="submit" className="btLogin">Entrar</button>
            </form>
            </div>
        </section>
    )
}