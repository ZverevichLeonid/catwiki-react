import Logo from "../Logo/Logo";
import "./footer.scss";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__row">
        <Link to={"/home"}>
          <Logo fill={"#ffffff"} />
        </Link>
        <div className="footer__desc">
          <a href="https://github.com/Pylenya" target="_blank">
            <p>© created by lenya.zverevich </p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
