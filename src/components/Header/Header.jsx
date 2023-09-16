import Logo from "../Logo/Logo";
import "./header.scss";
import { Link } from "react-router-dom";
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
