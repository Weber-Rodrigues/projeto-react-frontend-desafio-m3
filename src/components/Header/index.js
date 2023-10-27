import "./style.css";
import logo from "../../assets/logo.svg";
import perfil from "../../assets/perfil png.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />

      <div>
        <img src={perfil} alt="perfil" />
        <span>Bem vindo, Weber</span>
      </div>
    </header>
  );
};

export default Header;
