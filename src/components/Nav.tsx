import { Link } from "react-router-dom";

// Components/Nav.tsx
export function Nav(){
    return(
        <nav className="nav">
        <Link to="/">Ínicio</Link>
        <Link to="about">Sobre</Link>
        <Link to ="login">Login</Link>
        </nav>
    );
}