"use client";

import React, { Component, createRef } from "react";
// import { Link } from 'react-router-dom';
import Social from "../section-components/social";
import Copyright from "./copyright";
import Link from "next/link";

// // In some function or method...
// $('#my-element').hide();

class Footer_v1 extends Component {
  constructor(props) {
    super(props);
    this.goTopRef = createRef();
    this.themeBtnRef = createRef();
  }

  componentDidMount() {
    let publicUrl = process.env.NEXT_PUBLIC_URL;
    console.log("publicUrl" + publicUrl);
    /*
    const pluginjs = document.createElement("script");
    pluginjs.async = true;
    pluginjs.src = publicUrl + "/assets/js/plugins.js";
    document.body.appendChild(pluginjs);*/

    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "/assets/js/main.js";
    document.body.appendChild(minscript);
  }

  handleGoTopClick = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    setTimeout(() => {
      document.querySelector(".quarter-overlay").style.display = "none";
    }, 800);
  };

  handleThemeBtnClick = () => {
    document
      .querySelector("div")
      .classList.remove("modal-backdrop", "show", "fade");
    document.body.style = "";
  };

  render() {
    let publicUrl = process.env.NEXT_PUBLIC_URL;
    // let imgattr = "Footer logo";

    return (
      <footer className="ltn__footer-area  ">
        <div className="footer-top-area  section-bg-2 plr--5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-about-widget">
                  <div className="footer-logo">
                    <div className="site-logo">
                      <img
                        src={publicUrl + "/assets/img/logo-2.png"}
                        alt="Logo"
                      />
                    </div>
                  </div>
                  <p>
                    Lorem Ipsum is simply dummy text of the and typesetting
                    industry. Lorem Ipsum is dummy text of the printing.
                  </p>
                  <div className="footer-address">
                    <ul>
                      <li>
                        <div className="footer-address-icon">
                          <i className="icon-placeholder" />
                        </div>
                        <div className="footer-address-info">
                          <p>Brooklyn, New York, United States</p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <i className="icon-call" />
                        </div>
                        <div className="footer-address-info">
                          <p>
                            <a href="tel:+0123-456789">+0123-456789</a>
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="footer-address-icon">
                          <i className="icon-mail" />
                        </div>
                        <div className="footer-address-info">
                          <p>
                            <a href="mailto:example@example.com">
                              example@example.com
                            </a>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="ltn__social-media mt-20">
                    <Social />
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Company</h4>
                  <div className="footer-menu go-top">
                    <ul>
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                      <li>
                        <Link href="/blog-grid">Blog</Link>
                      </li>
                      <li>
                        <Link href="/shop">All Products</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact</Link>
                      </li>
                      <li>
                        <Link href="/faq">FAQ</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Services</h4>
                  <div className="footer-menu go-top">
                    <ul>
                      <li>
                        <Link href="/cart">Cart</Link>
                      </li>
                      <li>
                        <Link href="/wishlist">Wish List</Link>
                      </li>
                      <li>
                        <Link href="/login">Login</Link>
                      </li>
                      <li>
                        <Link href="/checkout">Checkout</Link>
                      </li>
                      <li>
                        <Link href="/about">Terms &amp; Conditions</Link>
                      </li>
                      <li>
                        <Link href="/shop">Promotional Offers</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-sm-6 col-12">
                <div className="footer-widget footer-menu-widget clearfix">
                  <h4 className="footer-title">Customer Care</h4>
                  <div className="footer-menu go-top">
                    <ul>
                      <li>
                        <Link href="/login">Login</Link>
                      </li>
                      <li>
                        <Link href="/my-account">My account</Link>
                      </li>
                      <li>
                        <Link href="/wishlist">Wish List</Link>
                      </li>
                      <li>
                        <Link href="/add-listing">Add listing</Link>
                      </li>
                      <li>
                        <Link href="/faq">FAQ</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-sm-12 col-12">
                <div className="footer-widget footer-newsletter-widget">
                  <h4 className="footer-title">Newsletter</h4>
                  <p>
                    Subscribe to our weekly Newsletter and receive updates via
                    email.
                  </p>
                  <div className="footer-newsletter">
                    <form action="#">
                      <input type="email" name="email" placeholder="Email*" />
                      <div className="btn-wrapper">
                        <button className="theme-btn-1 btn" type="submit">
                          <i className="fas fa-location-arrow" />
                        </button>
                      </div>
                    </form>
                  </div>
                  <h5 className="mt-30">We Accept</h5>
                  <img
                    src={"/assets/img/icons/payment-4.png"}
                    alt="Payment Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Copyright />
      </footer>
    );
  }
}

export default Footer_v1;