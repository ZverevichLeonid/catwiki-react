import loaderIMG from "../../assets/cat-1185453.svg";
import "./loader.scss";
export const Loader = () => {
  return (
    <div className="loader">
      <img src={loaderIMG} alt="cat image loader" className="loader__img" />
    </div>
  );
};

export default Loader;
