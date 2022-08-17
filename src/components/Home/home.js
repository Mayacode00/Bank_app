import React from "react";
import Photo from "../../assets/man.jpeg";
import "./home.css";

function Home() {
  return (
    <body>
      <div className="container">
        <div className="note">
          <h1>
            internet <br></br> <span>b</span>anking at your convenience
          </h1>
          <p>
            a secure way to access your accounts, manage payments, check your
            statements and much more. 24 hours a day, 7 days a weeks{" "}
          </p>
        </div>
        <div>
          <img src={Photo} />
          <div className="fill-up">
            <div className="current">
              <p className="color">
                current <span>a</span>ccount
              </p>
              <div>
                <p>
                  account <span>b</span>alance
                </p>
                <p>₦500,000.00</p>
              </div>
            </div>
            <div className="account">
              <div>
                <p>
                  account <span>n</span>ame
                </p>
                <p>
                  olasupo <span>t</span>unde <span>c</span>lanson
                </p>
              </div>
              <div>
                <p>
                  account <span>n</span>umber
                </p>
                <p>0234668517</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default Home;
