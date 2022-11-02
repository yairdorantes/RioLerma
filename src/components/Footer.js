import face from "../media/facebook.png";
import tw from "../media/tw.png";
import insta from "../media/instagram.png";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <>
      <footer id="social-media">
        <div style={{ textAlign: "center" }}>
          Apoya al rio lerma en estas redes sociales
        </div>
        <div className="container-social-media">
          <div>
            <a href="https://www.instagram.com/h2o_lerma/?hl=es">
              <img className="logo-red" src={insta} alt="" />
            </a>
          </div>
          <div>
            <a href="https://www.facebook.com/H2OLerma/">
              <img className="logo-red middle" src={face} alt="" />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/H2ORioLerma">
              <img className="logo-red" src={tw} alt="" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
