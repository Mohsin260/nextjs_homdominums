"use client";

import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import parse from "html-react-parser";
import Link from "next/link";

class SearchForm extends Component {
  render() {
    let publicUrl = process.env.NEXT_PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div className="ltn__car-dealer-form-area mt--65 mt-120 pb-115---">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ltn__car-dealer-form-tab">
                <div className="ltn__tab-menu  text-uppercase d-none">
                  <div className="nav">
                    <Link
                      className="active show"
                      data-bs-toggle="tab"
                      href="#ltn__form_tab_1_1"
                    >
                      <i className="fas fa-car" />
                      Find A Car
                    </Link>
                    <Link data-bs-toggle="tab" href="#ltn__form_tab_1_2">
                      <i className="far fa-user" />
                      Get a Dealer
                    </Link>
                  </div>
                </div>
                <div className="tab-content bg-white box-shadow-1 position-relative pb-10">
                  <div
                    className="tab-pane fade active show"
                    id="ltn__form_tab_1_1"
                  >
                    <div className="car-dealer-form-inner">
                      <form action="#" className="ltn__car-dealer-form-box row">
                        <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-car---- col-lg-3 col-md-6">
                          <select className="nice-select">
                            <option>Choose Area</option>
                            <option>chicago</option>
                            <option>London</option>
                            <option>Los Angeles</option>
                            <option>New York</option>
                            <option>New Jersey</option>
                          </select>
                        </div>
                        <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-meter---- col-lg-3 col-md-6">
                          <select className="nice-select">
                            <option>Property Status</option>
                            <option>Open house</option>
                            <option>Rent</option>
                            <option>Sale</option>
                            <option>Sold</option>
                          </select>
                        </div>
                        {/* <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-calendar---- col-lg-3 col-md-6">
                          <input type="text"
                           placeholder="Address"
                           className="nice-select"
                          />
                        </div> */}
                        <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-calendar---- col-lg-3 col-md-6">
                          <select className="nice-select">
                            <option>Property Type</option>
                            <option>Apartment</option>
                            <option>Co-op</option>
                            <option>Condo</option>
                            <option>Single Family Home</option>
                          </select>
                        </div>
                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
                          <div className="btn-wrapper text-center mt-0 go-top">
                            {/* <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button> */}
                            <Link
                              href="/shop"
                              className="btn theme-btn-1 btn-effect-1 text-uppercase"
                            >
                              Find Now
                            </Link>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="ltn__form_tab_1_2">
                    <div className="car-dealer-form-inner">
                      <form action="#" className="ltn__car-dealer-form-box row">
                        <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-car---- col-lg-3 col-md-6">
                          <select className="nice-select">
                            <option>Choose Area</option>
                            <option>chicago</option>
                            <option>London</option>
                            <option>Los Angeles</option>
                            <option>New York</option>
                            <option>New Jersey</option>
                          </select>
                        </div>
                        <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-meter---- col-lg-3 col-md-6">
                          <select className="nice-select">
                            <option>Property Status</option>
                            <option>Open house</option>
                            <option>Rent</option>
                            <option>Sale</option>
                            <option>Sold</option>
                          </select>
                        </div>
                        <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-calendar---- col-lg-3 col-md-6">
                          <select className="nice-select">
                            <option>Property Type</option>
                            <option>Apartment</option>
                            <option>Co-op</option>
                            <option>Condo</option>
                            <option>Single Family Home</option>
                          </select>
                        </div>
                        <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
                          <div className="btn-wrapper text-center mt-0 go-top">
                            {/* <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button> */}
                            <Link
                              href="/go-top"
                              className="btn theme-btn-1 btn-effect-1 text-uppercase"
                            >
                              Search Properties
                            </Link>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchForm;
