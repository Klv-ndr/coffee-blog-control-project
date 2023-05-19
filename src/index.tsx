import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import "./reset.css";

const Header = () => {
  return (
    <div className="header">
      <div className="supheader">
        <div className="logo"></div>
      </div>
      <div className="subheader">
        <div className="container">
          <div className="social-icons">
            <div className="facebook"></div>
            <div className="twitter"></div>
            <div className="instagram"></div>
          </div>
          <div className="main-menu">
            <ul className="menu">
              <li className="menu-options-home">
                Home
                <ul className="sub-menu">
                  <li className="children-menu">Home 1</li>
                  <li className="children-menu"> Home 2</li>
                  <li className="children-menu"> Home 3</li>
                </ul>
              </li>
              <li className="menu-options">News</li>
              <li className="menu-options">Coffee</li>
              <li className="menu-options">Farming</li>
              <li className="menu-options">Inspiration</li>
              <li className="menu-options">How To</li>
            </ul>
          </div>
          <div className="search">
            <div className="search-icon"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Header />
    </>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
