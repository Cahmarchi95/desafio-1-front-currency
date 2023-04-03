import Mask from "../images/Mask.png";
import Logo from "../images/Logo.png";
import moment from "moment/moment";
moment;
import "moment/locale/pt-br";

const Home = () => {
  const date = moment().format("LLL");

  return (
    <section>
      <img src={Mask} alt="mask" className="mask" />
      <div className="container">
        <img src={Logo} alt="logo" className="logo" />
        <div className="underline"></div>
        <span className="currency">Currency </span>
        <div className="date">{date}</div>
        <p className="dados">Dados de câmbio disponibilizados pela Morningstar.</p>
      </div>
    </section>
  );
};
export default Home;
