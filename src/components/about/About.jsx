import "./styles.css";
import BackgroundLand from "../LandingPage/backgroundLand/BackgroundLand";

export default function About() {
  return (
    <>
      <BackgroundLand />

      <div className="main-co">
        <div className="about-container">
          <div className="title">
            <h1>About Us</h1>
          </div>
          <div className="member-co">
            <div className="member-title">Meet the Team Behind Project EI</div>
            <div className="members">
              <div className="member">
                <div className="name">Thar Htet Myint</div>
                <div className="role">
                  <p>Developer</p>
                </div>
              </div>
              <div className="member">
                <div className="name">Nyan Lin Aung</div>
                <div className="role">
                  <p>Developer</p>
                </div>
              </div>
              <div className="member">
                <div className="name">Zin Lin</div>
                <div className="role">
                  <p>UI/UX Designer</p>
                </div>
              </div>
              <div className="member">
                <div className="name">Nyan Tun Zaw </div>
                <div className="role">
                  <p>UI/UX Designer</p>
                </div>
              </div>
              <div className="member">
                <div className="name">Saung Wutyee Nandar Aung</div>
                <div className="role">
                  <p>Data Analytics</p>
                </div>
              </div>
              <div className="member">
                <div className="name">Aye Mya Nandar Nyo</div>
                <div className="role">
                  <p>Data Researcher</p>
                </div>
              </div>
              <div className="member">
                <div className="name">Myat Bhone Paing</div>
                <div className="role">
                  <p>Survey, Interview</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-only">
            <div className="para-co">
              <div className="para-title text-title">
                <p>Project EI: Efficient Email Response System</p>
              </div>
              <div className="paragraph">
                <p>
                  At Wicked-7, we are a dedicated team of professionals with a
                  mission to revolutionize email communication. Our project,
                  "EI", aims to transform the way you handle email responses.
                  Say goodbye to the days of tedious typing and repetitive
                  replies. With our cutting-edge system, all it takes is a quick
                  paste to streamline your email responses.
                </p>
              </div>
            </div>

            <div className="work-co">
              <div className="work-title text-title">
                <p>How it Works</p>
              </div>
              <div className="work">
                <p>
                  Effortless Input: No need to type out lengthy responses.
                  Simply paste the sender's email into our system. Tailored
                  Responses: Our system intelligently generates responses based
                  on the sender's email content. Faster Turnaround: Say goodbye
                  to delays. Respond to emails in record time. Efficiency
                  Redefined: Focus on what matters while our system handles the
                  rest. Experience the future of email communication with
                  Wicked-7. Join us in our quest for a faster, smarter, and more
                  efficient email response system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
