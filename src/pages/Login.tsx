// pages/Login.tsx
export function Login(){
    return(
        <section className="page">
            <h2 className="page-title">Faça seu Login</h2>
            <div className="square">
            <form>
                <div className="form-group">
                <label>Email</label>
                <input type="text" placeholder="Email" className="emailForm" />
                </div>
                <br />
                <div className="form-group">
                <label>Senha</label>
                <input type="password" placeholder="Senha" className="emailForm" />
                </div>
                <button type="submit" className="btLogin">Entrar</button>
            </form>
            </div>
        </section>
    )
}