import { Navbar } from "../../components/Navbar";
import Quiz from "../../components/Quiz";
import Sounds from "../Sound";
import "./style.css";

export const HomePage = () => {
  return (
    <div className="container">
      {/* <Navbar /> */}
      <Quiz />
      {/* <Sounds /> */}
    </div>
  );
};
