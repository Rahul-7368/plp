import React, { useState, useEffect } from "react";
import "./App.css";
import Logo from "./Assets/Logo.png";
import search from "./Assets/search-normal.png";
import heart from "./Assets/heart.png";
import shopping from "./Assets/shopping-bag.png";
import profile from "./Assets/profile.png";
import Language from "./Assets/Language.png";
import element from "./Assets/element-4.png";
import left from "./Assets/arrow-left.png";
import vector from "./Assets/Vector.png";
import productimage from "./Assets/Front Pic.png";
import productimage1 from "./Assets/Front Pic1.png";
import productimage2 from "./Assets/Rectangle 29438.png";
import productimage3 from "./Assets/Rectangle 294381.png";
import productimage4 from "./Assets/Rectangle 294382.png";
import productimage5 from "./Assets/Rectangle 294383.png";
import productimage6 from "./Assets/Rectangle1 29438.png";
import productimage7 from "./Assets/Rectangle2 29438.png";
import productimage8 from "./Assets/Rectangle4 29438.png";
import flag from "./Assets/United States of America (US).png";
import star from "./Assets/Star 1.png";
import line from "./Assets/Line 20.png";
import insta from "./Assets/svg.png";
import linkedin from "./Assets/mdi_linkedin.png";
import gpay from "./Assets/Group 136187.png";
import master from "./Assets/Group 136189.png";
import pay from "./Assets/Group 136191.png";
import max from "./Assets/max.png";
import group from "./Assets/Group.png";
import dpay from "./Assets/d.png";

function App() {
  const [products, setProducts] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchProducts = () => {
      const productData = Array.from({ length: 18 }, (_, index) => ({
        id: index + 1,
        name: `Product ${index + 1}`,
        price: (Math.random() * 100).toFixed(2),
        image:
          index % 9 === 0
            ? productimage
            : index % 9 === 1
            ? productimage1
            : index % 9 === 2
            ? productimage2
            : index % 9 === 3
            ? productimage3
            : index % 9 === 4
            ? productimage4
            : index % 9 === 5
            ? productimage5
            : index % 9 === 6
            ? productimage6
            : index % 9 === 7
            ? productimage7
            : productimage8,
      }));
      setProducts(productData);
    };

    fetchProducts();
  }, []);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="container">
      <div className="grey-strip">
        <div className="grey-item">
          <img src={element} alt="Element" />
          <h5>Lorem Ipsum Dollar</h5>
        </div>
        <div className="grey-item">
          <img src={element} alt="Element" />
          <h5>Lorem Ipsum Dollar</h5>
        </div>
        <div className="grey-item">
          <img src={element} alt="Element" />
          <h5>Lorem Ipsum Dollar</h5>
        </div>
      </div>
      <header>
        <div className="logo-container">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <h1 className="main-heading">LOGO</h1>

        <div className="icon-container">
          <img src={search} alt="Search" />
          <img src={heart} alt="Heart" />
          <img src={shopping} alt="Shopping" />
          <img src={profile} alt="Profile" />
          <img src={Language} alt="Language" />
        </div>
      </header>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#shop">Shop</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#stories">Stories</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </nav>

      <section className="intro">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum vestibulum.
        </p>
      </section>

      <div className="box">
        <nav>
          <ul className="box-link">
            <li>
              <a href="#items">3425 Items</a>
            </li>
            <li>
              <img src={left} alt={"Left"} />
              <a href="#filter">Hide Filter</a>
            </li>
            <li>
              <a href="#recoomend">Recommended</a>
              <img src={vector} alt={"Vector"} />
            </li>
          </ul>
        </nav>
      </div>

      <h1>New Product</h1>

      <main className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>PRODUCT NAME</h2>
            <div className="product-details">
              <p>
                <a href="/signin" className="signin-link">
                  sign in
                </a>{" "}
                or create an account to see pricing
                <a href="/favorite" className="heart-link">
                  <img src={heart} alt="Heart" className="heart-icon" />
                </a>
              </p>
            </div>
          </div>
        ))}
      </main>

      <footer>
        <div className="upperFooter">
          <div class="left-section">
            <h2>Be the first to know</h2>
            <h5>Sign up for update from metause</h5>
            <div className="newsLetter">
              <label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                />
              </label>
              <button>SUBSCRIBE</button>
            </div>
          </div>

          <div class="right-section">
            <h3>CONTACT US</h3>
            <p>+44 221 133 5360 </p>
            <p>customercare@mettamuse.com</p>
            <h3>CURRENCY</h3>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img src={flag} alt="Flag" />
              <img src={star} alt="Star" style={{ marginLeft: "8px" }} />
              <h5 style={{ marginLeft: "8px" }}>USD</h5>
            </div>
            <p style={{ fontSize: "10px" }}>
              Transaction will be completed in Euros and a currency reference is
              available on hover
            </p>
          </div>
        </div>

        <div class="margin">
          <img src={line} alt="Line" />
        </div>

        <div className="lowerFooter">
          <div class="left">
            <h3>metta muse</h3>
            <nav>
              <ul>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#stories">Stories</a>
                </li>
                <li>
                  <a href="#artisans">Artisans</a>
                </li>
                <li>
                  <a href="boutiques">Boutiques</a>
                </li>
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
                <li>
                  <a href="#compliances">EU Compliances Doc</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="middle">
            <h2>QUICK LINKS</h2>
            <nav>
              <ul>
                <li>
                  <a href="order">Order $ Shipping</a>
                </li>
                <li>
                  <a href="#join">Join/Login as a seller</a>
                </li>
                <li>
                  <a href="#payment">Payment and Pricing</a>
                </li>
                <li>
                  <a href="#return">Return & Refunds</a>
                </li>
                <li>
                  <a href="#faq">FAQs</a>
                </li>
                <li>
                  <a href="#privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="#terms">Terms & Conditions</a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="right">
            <h1>FOLLOW US</h1>
            <div class="img">
              <img src={insta} alt="Insta" />

              <img src={linkedin} alt="Linkedin" />
            </div>
            <h1>metta muse ACCEPT</h1>
            <div class="paying">
              <img src={gpay} alt="Gpay" />
              <img src={master} alt="MasterCard" />
              <img src={pay} alt="Pay" />
              <img src={max} alt="Max" />
              <img src={group} alt="Group" />
              <img src={dpay} alt="Dpay" />
            </div>
          </div>
        </div> 

         <div className="rights">
          <p>Copyright © 2023 mettamuse. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
