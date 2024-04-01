import Nav from "../Nav/Nav";
import Body from "../Body/Body";
import Background from "../Body/background/Background";
import Footer from "../Footer/Footer";
import "./styles.css";

export default function MainPage() {
  return (
    <div className="blue">
      <Background />
      <Nav />
      <div className="center">
        <Body />
        <Footer />
      </div>
    </div>
  );
}
