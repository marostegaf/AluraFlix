import logo from "./logo.png";
import Botao from "Components/Botao";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link to={"/"}>
                <img src={ logo } />
            </Link>
            <div>
                <Link to={"/"}>
                    <Botao text="Home"/>
                </Link>
                <Link to={"novovideo"}>
                    <Botao text="Novo Vídeo"/>
                </Link>
            </div>
        </div>
    )
}

export default Header;
