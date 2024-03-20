import "./App.css";
import Nav from "./components/Nav/Nav";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Background from "./components/Body/background/Background";
import Landing from "./components/Pages/Landing";

function App() {
  return (
    <div className="App">
      <Background />

      <Nav />
      <Body />
      <Footer />
      {/* <Landing /> */}
    </div>
  );
}

export default App;
