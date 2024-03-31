import { useEffect, React } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import i_ from "../../assets/images/i.png";
import e_ from "../../assets/images/E.png";
import downarrow from "../../assets/images/downarrow.png";
import me from "../../assets/images/me.png";
import nyo from "../../assets/images/nyo.png";
import thar from "../../assets/images/thar.png";
import blaze from "../../assets/images/blaze.png";
import saung from "../../assets/images/saung.png";
import harry from "../../assets/images/harry.png";
import nyan from "../../assets/images/nyan.png";
import chat_bot from "../../assets/images/chat_bot.png";
import lax from "lax.js";
import BackgroundLand from "./backgroundLand/BackgroundLand";
// import { GoogleLogin } from "@react-oauth/google";

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    lax.init();

    lax.addDriver(
      "scrollY",
      function () {
        return document.documentElement.scrollTop;
      },
      { frameStep: 1 }
    );

    lax.addElements(".letter-x", {
      scrollY: {
        translateY: [
          [-400, 0, 100],
          [300, 0, 100],
        ],
        scale: [
          [100, "screenHeight"],
          [0.25, 10],
        ],
        opacity: [
          [0, "screenHeight/2", "screenHeight"],
          [1, 1, 0],
        ],
      },
    });

    // Add all other lax elements here...
    lax.addElements(".letter-l", {
      scrollY: {
        translateY: [
          [-400, 0],
          [100, 0],
        ],
        translateX: [
          [0, "screenHeight"],
          [0, 400],
        ],
        opacity: [
          [0, "screenHeight/2"],
          [1, 0],
        ],
      },
    });

    lax.addElements(".letter-a", {
      scrollY: {
        translateY: [
          [-400, 0],
          [200, 0],
        ],
        translateX: [
          [0, "screenHeight"],
          [0, -400],
        ],
        opacity: [
          [0, "screenHeight/2"],
          [1, 0],
        ],
      },
    });

    lax.addElements(".scrolldown", {
      scrollY: {
        "letter-spacing": [
          [0, "screenHeight"],
          [0, 150],
          {
            cssUnit: "px",
          },
        ],
        opacity: [
          ["screenHeight*0.25", "screenHeight*0.75"],
          [1, 0],
        ],
        translateX: [
          [0, "screenHeight"],
          [0, 80],
        ],
      },
    });

    lax.addElements(".oooh", {
      scrollY: {
        translateX: [
          ["elInY", "elOutY"],
          [0, "screenWidth-200"],
        ],
      },
    });

    lax.addElements(".aaah", {
      scrollY: {
        translateX: [
          ["elInY", "elOutY"],
          [0, "-screenWidth-200"],
        ],
      },
    });

    lax.addElements(".wheee", {
      scrollY: {
        translateX: [
          ["elInY", "elOutY"],
          [-400, "screenWidth+100"],
        ],
        skewX: [
          ["elInY", "elOutY"],
          [40, -40],
        ],
      },
    });

    lax.addElements(".bubble", {
      scrollY: {
        translateY: [
          ["screenHeight/4", "screenHeight * 3"],
          ["Math.random()*screenHeight", "Math.random()*screenHeight*3"],
        ],
        opacity: [
          ["screenHeight/4", "screenHeight/2"],
          [0, 1],
        ],
        scale: [[0], ["(Math.random()*0.8)+0.2"]],
        translateX: [[0], ["index*(screenWidth/25)-50"]],
        transform: [
          [0, 4000],
          [0, "(Math.random() + 0.8) * 1000"],
          {
            cssFn: function (val) {
              return `rotateX(${val % 360}deg)`;
            },
          },
        ],
        rotate: [
          [0, 4000],
          [0, "(Math.random() - 0.5) * 1000"],
        ],
      },
    });

    lax.addElements(".downarrows img", {
      scrollY: {
        translateY: [
          [0, 200],
          [0, 200],
        ],
        opacity: [
          [0, "screenHeight"],
          [1, 0],
        ],
      },
    });

    lax.addElements(".bottombutton", {
      scrollY: {
        "background-position": [
          ["elInY", "elOutY"],
          [0, 400],
          {
            cssFn: function (val) {
              return `${val}px 0`;
            },
          },
        ],
        scale: [
          ["elInY", "elCenterY"],
          [3, 1],
        ],
      },
    });
  }, []);

  return (
    <div className="body">
      <img src={e_} className="letter-l" alt="e" />
      <img src={i_} className="letter-a" alt="i" />
      <div className="letter-x">
        <img src={chat_bot} alt="Hello" />
      </div>
      <h2 className="scrolldown">Let's Cook🫸🏼😜</h2>
      <div className="downarrows">
        <img src={downarrow} alt="downarrow" />
      </div>
      {/* <div className="zags">
        <div id="pinkZag" className="zag"></div>
        <div id="tealZag" className="zag"></div>
        <div id="purpleZag" className="zag"></div>
      </div> */}
      <div className="bubbles">
        <div className="bubble ">
          <img src={blaze} alt="me" />
        </div>
        <div className="bubble red">
          <img src={thar} alt="me" />
        </div>
        <div className="bubble yellow">
          <img src={saung} alt="me" />
        </div>
        <div className="bubble red">
          <img src={harry} alt="me" />
        </div>
        <div className="bubble ">
          <img src={nyan} alt="me" />
        </div>
        <div className="bubble yellow">
          <img src={me} alt="me" />
        </div>
        <div className="bubble ">
          <img src={thar} alt="me" />
        </div>
        <div className="bubble red">
          <img src={me} alt="me" />
        </div>
        <div className="bubble yellow">
          <img src={me} alt="me" />
        </div>
        <div className="bubble red">
          <img src={nyo} alt="me" />
        </div>
        <div className="bubble ">
          <img src={nyan} alt="me" />
        </div>
        <div className="bubble ">
          <img src={thar} alt="me" />
        </div>
        <div className="bubble red">
          <img src={blaze} alt="me" />
        </div>
        <div className="bubble yellow">
          <img src={me} alt="me" />
        </div>
        <div className="bubble red">
          <img src={blaze} alt="me" />
        </div>
        <div className="bubble ">
          <img src={me} alt="me" />
        </div>
        <div className="bubble yellow">
          <img src={saung} alt="me" />
        </div>
        <div className="bubble ">
          <img src={nyo} alt="me" />
        </div>
        <div className="bubble red">
          <img src={nyan} alt="me" />
        </div>
        <div className="bubble yellow">
          <img src={harry} alt="me" />
        </div>
        <div className="bubble red">
          <img src={me} alt="me" />
        </div>
        <div className="bubble ">
          <img src={saung} alt="me" />
        </div>
        <div className="bubble yellow">
          <img src={me} alt="me" />
        </div>
        <div className="bubble ">
          <img src={harry} alt="me" />
        </div>
        <div className="bubble red">
          <img src={nyo} alt="me" />
        </div>
      </div>
      <h1 className="oooh">WE</h1>
      <h1 className="aaah">ARE</h1>
      <h1 className="wheee">Wicked 7!</h1>
      <div className="bottombg"></div>
      <Link to="/MainPage">
        <button className="bottombutton">Get Started</button>
      </Link>
      <BackgroundLand />
    </div>
  );
};

export default LandingPage;

{
  /* <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          /> */
}
