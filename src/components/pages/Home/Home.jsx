import { MainBanner } from "../../MainBanner/MainBanner";
import { Characters } from "../Characters/Characters";
import "./Home.css";

//-----------------------------------------

export const Home = () => {
  return (
    <div className="home">
      <MainBanner />
      <Characters />
    </div>
  );
};
