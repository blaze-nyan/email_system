import "./App.css";
import Nav from "./components/Nav/Nav";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import Background from "./components/Body/background/Background";

function App() {
  return (
    <div className="App">
      <Background />

      <Nav />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
