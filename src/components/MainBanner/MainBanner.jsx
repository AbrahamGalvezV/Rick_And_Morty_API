import "./MainBanner.css";
import banner from "../../assets/img/home.png";
//---------------------------------------------

export const MainBanner = () => {
  return (
    <div className="banner">
      <img className="banner__img" src={banner} alt="" />
    </div>
  );
};
