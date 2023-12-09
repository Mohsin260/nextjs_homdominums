"use client";

import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import parse from "html-react-parser";
import Link from "next/link";

class ApartmentV1 extends Component {
  render() {
    let publicUrl = process.env.NEXT_PUBLIC_URL + "/";
    let CustomClass = this.props.CustomClass ? this.props.CustomClass : "";

    return (
      <div
        className={"ltn__apartments-plan-area pt-115--- pb-70 " + CustomClass}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">
                  Apartment Sketch
                </h6>
                <h1 className="section-title">Apartments Plan</h1>
              </div>
              <div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center">
                <div className="nav">
                  <Link data-bs-toggle="tab" href="#liton_tab_3_1">
                    The Studio
                  </Link>
                  <Link
                    className="active show"
                    data-bs-toggle="tab"
                    href="#liton_tab_3_2"
                  >
                    Deluxe Portion
                  </Link>
                  <Link data-bs-toggle="tab" href="#liton_tab_3_3">
                    Penthouse
                  </Link>
                  <Link data-bs-toggle="tab" href="#liton_tab_3_4">
                    Top Garden
                  </Link>
                  <Link data-bs-toggle="tab" href="#liton_tab_3_5">
                    Double Height
                  </Link>
                </div>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade" id="liton_tab_3_1">
                  <div className="ltn__apartments-tab-content-inner">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="apartments-plan-info ltn__secondary-bg text-color-white">
                          <h2>The Studio</h2>
                          <p>
                            Enimad minim veniam quis nostrud exercitation
                            ullamco laboris. Lorem ipsum dolor sit amet cons
                            aetetur adipisicing elit sedo eiusmod
                            tempor.Incididunt labore et dolore magna aliqua. sed
                            ayd minim veniam.
                          </p>
                          <div className="apartments-info-list apartments-info-list-color mt-40">
                            <ul>
                              <li>
                                <label>Total Area</label>{" "}
                                <span>2800 Sq. Ft</span>
                              </li>
                              <li>
                                <label>Bedroom</label> <span>150 Sq. Ft</span>
                              </li>
                              <li>
                                <label>Bathroom</label> <span>45 Sq. Ft</span>
                              </li>
                              <li>
                                <label>Belcony/Pets</label> <span>Allowed</span>
                              </li>
                              <li>
                                <label>Lounge</label> <span>650 Sq. Ft</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="apartments-plan-img">
                          <img
                            src={publicUrl + "/assets/img/others/10.png"}
                            alt="#"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade active show" id="liton_tab_3_2">
                  <div className="ltn__product-tab-content-inner">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="apartments-plan-info ltn__secondary-bg text-color-white">
                          <h2>Deluxe Portion</h2>
                          <p>
                            Enimad minim veniam quis nostrud exercitation
                            ullamco laboris. Lorem ipsum dolor sit amet cons
                            aetetur adipisicing elit sedo eiusmod
                            tempor.Incididunt labore et dolore magna aliqua. sed
                            ayd minim veniam.
                          </p>
                          <div className="apartments-info-list apartments-info-list-color mt-40">
                            <ul>
                              <li>
                                <label>Total Area</label>{" "}
                                <span>2800 Sq. Ft</span>
                              </li>
                              <li>
                                <label>Bedroom</label> <span>150 Sq. Ft</span>
                              </li>
                              <li>
                                <label>Bathroom</label> <span>45 Sq. Ft</span>
                              </li>
                              <li>
                                <label>Belcony/Pets</label> <span>Allowed</span>
                              </li>
                              <li>
                                <label>Lounge</label> <span>650 Sq. Ft</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="apartments-plan-img">
                          <img
                            src={publicUrl + "/assets/img/others/10.png"}
                            alt="#"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="liton_tab_3_3">
                  <div className="ltn__product-tab-content-inner">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="apartments-plan-info ltn__secondary-bg text-color-white">
                          <h2>Penthouse</h2>
                          <p>
                            Enimad minim veniam quis nostrud exercitation
                            ullamco laboris. Lorem ipsum dolor sit amet cons
                            aetetur adipisicing elit sedo eiusmod
                            tempor.Incididunt labore et dolore magna aliqua. sed
                            ayd minim veniam.
                          </p>
                          <div className="apartments-info-list apartments-info-list-color mt-40">
                            <ul>
                              <li>
                                <label>Total Area</label>{" "}
                                <span>2800 Sq. Ft</span>
                              </li>
                              <li>
                                <label>Bedroom</label> <span>150 Sq. Ft</span>
                              </li>
                              <li>
                                <label>Bathroom</label> <span>45 Sq. Ft</span>
                              </li>
                              <li>
                                <label>Belcony/Pets</label> <span>Allowed</span>
                              </li>
                              <li>
                                <label>Lounge</label> <span>650 Sq. Ft</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="apartments-plan-img">
                          <img
                            src={publicUrl + "/assets/img/others/10.png"}
                            alt="#"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="liton_tab_3_4">
                  <div className="ltn__product-tab-content-inner">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="apartments-plan-info ltn__secondary-bg text-color-white">
                          <h2>Top Garden</h2>
                          <p>
                            Enimad minim veniam quis nostrud exercitation
                            ullamco laboris. Lorem ipsum dolor sit amet cons
                            aetetur adipisicing elit sedo eiusmod
                            tempor.Incididunt labore et dolore magna aliqua. sed
                            ayd minim veniam.
                          </p>
                          <div className="apartments-info-list apartments-info-list-color mt-40">
                            <ul>
                              <li>
                                <label>Total Area</label>{" "}
                                <span>2800 Sq. Ft</span>
                              </li>
                              <li>
                                <label>Bedroom</label> <span>150 Sq. Ft</span>
                              </li>
                              <li>
                                <label>Bathroom</label> <span>45 Sq. Ft</span>
                              </li>
                              <li>
                                <label>Belcony/Pets</label> <span>Allowed</span>
                              </li>
                              <li>
                                <label>Lounge</label> <span>650 Sq. Ft</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="apartments-plan-img">
                          <img
                            src={publicUrl + "/assets/img/others/10.png"}
                            alt="#"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="liton_tab_3_5">
                  <div className="ltn__product-tab-content-inner">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="apartments-plan-info ltn__secondary-bg text-color-white">
                          <h2>Double Height</h2>
                          <p>
                            Enimad minim veniam quis nostrud exercitation
                            ullamco laboris. Lorem ipsum dolor sit amet cons
                            aetetur adipisicing elit sedo eiusmod
                            tempor.Incididunt labore et dolore magna aliqua. sed
                            ayd minim veniam.
                          </p>
                          <div className="apartments-info-list apartments-info-list-color mt-40">
                            <ul>
                              <li>
                                <label>Total Area</label>{" "}
                                <span>2800 Sq. Ft</span>
                              </li>
                              <li>
                                <label>Bedroom</label> <span>150 Sq. Ft</span>
                              </li>
                              <li>
                                <label>Bathroom</label> <span>45 Sq. Ft</span>
                              </li>
                              <li>
                                <label>Belcony/Pets</label> <span>Allowed</span>
                              </li>
                              <li>
                                <label>Lounge</label> <span>650 Sq. Ft</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="apartments-plan-img">
                          <img
                            src={publicUrl + "/assets/img/others/10.png"}
                            alt="#"
                          />
                        </div>
                      </div>
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

export default ApartmentV1;
