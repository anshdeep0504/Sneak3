// Navbar.js

import React, { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import "./navbar.css";

function Navbar() {
    const [mainImage, setMainImage] = useState("/luke1.jpeg");

    function changeMainImage(newImage) {
        setMainImage(newImage);
    }

    return (
      <div className='taskbar'>
        <div className='bg1'>  
          <div className='logo'>
              <img src="/0139937c2f641ab61fd020844ccfd459.jpg" alt="logo" />
          </div>
        </div>
        <nav className="navbar ">
          <div className='name'> 
            <img src='/33e63d5adb0da6b303a83901c8e8463a.jpg' alt='logo' />
          </div>
          <form className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
          </form>
        </nav>
        <div className='heart'><FaRegHeart /></div>
        <div className='cart'><IoCart /></div>
        <div className='nav2'>
          <p>New Arrivals</p>
          <p>Men</p>
          <p>Women</p>
          <p>Apparel</p>
          
          <p>Trending</p>
        </div>
        <div className='flexbox'>
            <div className='findastore'>Find a Store </div>
            <div className='help'>Help </div>
            <div className='joinus'>Join Us </div>
            <a href="https://sneak3-4xp4wvq8e-anshs-projects-d237de0d.vercel.app/" class="signin">Sign In</a>
            <div className='sign1'>|</div>
            <div className='sign2'>|</div>
            <div className='sign3'>|</div>
          </div>
            <div className="main-wrapper">
                <div className="container">
                    <div className="product-div">
                        <div className="product-div-left">
                            <div className="img-container">
                                <img src={mainImage} alt="Main_image"/>
                            </div>
                            <div className="hover-container">
                                <div><img src="/dunk2.png" onMouseEnter={() => changeMainImage("/dunk2.png")} /></div>
                                <div><img src="/dunk3.png" onMouseEnter={() => changeMainImage("/dunk3.png")} /></div>
                                <div><img src="/dunk4.png" onMouseEnter={() => changeMainImage("/dunk4.png")} /></div>
                                <div><img src="/dunk5.png" onMouseEnter={() => changeMainImage("/dunk5.png")} /></div>
                                <div><img src="/dunk6.png" onMouseEnter={() => changeMainImage("/dunk6.png")} /></div>
                            </div>
                        </div>
                        <div className="product-div-right">
                        <span class = "product-name">Luka 2 PF</span>
                    <span class = "shoe-type">Basketball Shoes</span>
                    <span class = "product-price">₹ 11 297.00</span>
                    <span class = "MRP">MRP : ₹ 11 895.00</span>
                    <span class = "taxes">incl of taxes</span>
                    <span class = "duties">(Also includes all applicable duties)</span>
                    <span class = "select">Select Size</span>
                    <span class = "sizeguide">Size Guide</span>
                    <div class="btn-grid">
    <button type="button" class="btn btn-outline-dark">UK 6 (EU 40)</button>
    <button type="button" class="btn btn-outline-dark">UK 6.5</button>
    <button type="button" class="btn btn-outline-dark">UK 7</button>
    <button type="button" class="btn btn-outline-dark">UK 7.5</button>
    <button type="button" class="btn btn-outline-dark">UK 8</button>
    <button type="button" class="btn btn-outline-dark">UK 8.5</button>
    <button type="button" class="btn btn-outline-dark">UK 9</button>
    <button type="button" class="btn btn-outline-dark">UK 9.5</button>
    <button type="button" class="btn btn-outline-dark">UK 10</button>
    <button type="button" class="btn btn-outline-dark">UK 10.5</button>
    <button type="button" class="btn btn-outline-dark">UK 11</button>
    <button type="button" class="btn btn-outline-dark">UK 12</button>
</div>
<div class = "product-rating">
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "fas fa-star"></i></span>
                        <span><i class = "fas fa-star-half-alt"></i></span>
                        
                    </div>
                    <div class = "btn-groups">
                        <button type = "button" class = "add-cart-btn"><i class = "fas fa-shopping-cart"></i>add to cart</button>
                        <a href="https://sneak2.vercel.app/" class="buy-now-btn"><i class="fas fa-wallet"></i>buy now</a>

                    </div>
                    <p class = "product-description">You bring the speed. We'll bring the stability. The Luka 2 is built to support your skills, with an emphasis on step-backs, side-steps and quick-stop action. A stacked midsole features firm, flexible cushioning for added responsiveness as you shift back and forth on the court. Up top, the full-foot wrapped cage design helps you stay contained whether you're faking out a defender or driving down the lane. With all that tech in a lightweight package, we've got efficiency covered. The rest is up to you.</p>
                    <ul className='des2'>
  <li>Colour Shown: Wolf Grey/Black/Hyper Jade/Speed Yellow</li>
  <li>Style: DX9012-007</li>
</ul>

            
                        </div>
                    </div>
                </div>
            </div>
            <div className='flexbox'>
                {/* Other navbar elements */}
            </div>
            <div className='bg1'></div>
            <footer className="custom-footer">
                <div className="custom-container">
                    <div className="custom-column">
                        <h3>COMPANY</h3>
                        <p>About Nike</p>
                        <p>News</p>
                        <p>Careers</p>
                        <p>Investors</p>
                        <p>Sustainability</p>
                    </div>
                    <div className="custom-column">
                        <h3>HELP</h3>
                        <p>Get help</p>
                        <p>Order Status</p>
                        <p>Delivery</p>
                        <p>Return</p>
                    </div>
                    <div className="custom-column">
                        <h3>FIND A STORE</h3>
                        <p>Become A Member</p>
                        <p>Send Us Feedback</p>
                    </div>
                    <div className="custom-column">
                        <h3>BECOME A MEMBER</h3>
                        <p>Sign up for exclusive offers</p>
                        <p>Join Now</p>
                    </div>
                </div>
                <div className="custom-horizontal-line"></div>
                <div className="custom-footer-bottom">
                    <div className="custom-container">
                        <div className='do'> 
                            <p>&copy; 2024 Nike, Inc. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Navbar;
