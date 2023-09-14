import Logo from "../Logo/Logo";
import "./footer.scss";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__row">
        <Logo fill={"#ffffff"} />
        <div className="footer__desc">
          <p>© created by lenya.zverevich </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
