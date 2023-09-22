import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./header.scss";

export const Header = () => {
  return (
    <header className="header">
      <Link to={"/home"}>
        <Logo />
      </Link>
    </header>
  );
};

export default Header;
