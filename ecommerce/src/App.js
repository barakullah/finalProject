import logo from "./logo.svg";
import react from "react";
import "./App.css";
import data from "./data";
import { BrowserRouter } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>

            <Link to="/">Shopping</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">cart </a>
            <a href="signin.html"> sign in</a>
          </div>
        </header>

        <aside className="sidebar">
          <h3>Shopping category</h3>
          <button className="sidebar-close" onClick={closeMenu}>
            x
          </button>
          <div className="sidebar-style">
            <ul>
              <li>
                <a className="pant" href="index.html">
                  Pants
                </a>
              </li>
              <li>
                <a href="index.html">Shirts</a>
              </li>
            </ul>
          </div>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/Product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">All rights reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
