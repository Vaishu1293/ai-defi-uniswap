"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeChanger from "../home/ThemeChanger";
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
import prifile1 from "../../../public/assets/img/profile/profile37.png";
import CounterTwo from "@/utils/CounterTwo";

const WalletConnectMain = () => {
  useFlashlightAnimation();
  const [timeRange, setTimeRange] = useState<"day" | "month" | "year">("month");
  
  // Data based on time range
    const getDataForTimeRange = (range: "day" | "month" | "year") => {
        switch (range) {
            case "day":
                return [
                    { x: new Date("2023-12-23").getTime(), y: 350 },
                    { x: new Date("2023-12-24").getTime(), y: 400 },
                    { x: new Date("2023-12-25").getTime(), y: 450 },
                    { x: new Date("2023-12-26").getTime(), y: 500 },
                ];
            case "month":
                return [
                    { x: new Date("2023-01-01").getTime(), y: 350 },
                    { x: new Date("2023-02-01").getTime(), y: 400 },
                    { x: new Date("2023-03-01").getTime(), y: 450 },
                    { x: new Date("2023-04-01").getTime(), y: 500 },
                    { x: new Date("2023-05-01").getTime(), y: 550 },
                    { x: new Date("2023-06-01").getTime(), y: 600 },
                    { x: new Date("2023-07-01").getTime(), y: 650 },
                    { x: new Date("2023-08-01").getTime(), y: 700 },
                    { x: new Date("2023-09-01").getTime(), y: 750 },
                    { x: new Date("2023-10-01").getTime(), y: 800 },
                    { x: new Date("2023-11-01").getTime(), y: 850 },
                    { x: new Date("2023-12-01").getTime(), y: 900 },
                ];
            case "year":
                return [
                    { x: new Date("2023-01-01").getTime(), y: 350 },
                    { x: new Date("2023-06-01").getTime(), y: 600 },
                    { x: new Date("2023-12-01").getTime(), y: 900 },
                ];
            default:
                return [];
        }
    };

    // Get the series data based on the selected time range
    const series = [
        {
            name: "Visitors",
            data: getDataForTimeRange(timeRange),
        },
    ];
  return (
    <main>
      <ThemeChanger />

      <section className="connect-wallet-area pt-0 pb-40">
        <div className="container">
          <div className="connect-wallet-wrapper mb-2">
            <div className="art-details-information mt-4">
              <div className="art-information-tab-nav mb-20">
                <nav>
                  <div
                    className="nav nav-tabs"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-link active"
                      id="nav-bid-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#tab-nav1"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      <span className="profile-nav-button">
                        Limit
                      </span>
                    </button>
                    <button
                      className="nav-link"
                      id="nav-info-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#tab-nav2"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      <span className="profile-nav-button">
                        Buy
                      </span>
                    </button>
                    <button
                      className="nav-link"
                      id="nav-details-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#tab-nav3"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      <span className="profile-nav-button">Sell</span>
                    </button>
                  </div>
                </nav>
              </div>
              <div className="art-information-tab-contents mb-0">
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade active show"
                    id="tab-nav1"
                    role="tabpanel"
                    aria-labelledby="nav-bid-tab"
                  >
                   <div className="art-info-wrapper light-effect-top">
                      <div className="dashboard-banner-text">
                        <div className="dashboard-banner-text-wrap">
                          <h1>When 1 ETH is worth</h1>
                        </div>
                        <div className="dashboard-banner-box">
                          <div className="dashboard-banner-box-item">
                            <span>USDC</span>
                            <h4>2436.9</h4>
                          </div>
                          <div className="dashboard-banner-box-item">
                            <div className="time-range-buttons d-flex gap-2">
                        <button
                            className={` ${timeRange === "day" ? "border-btn border-btn-sm active" : "border-btn border-btn-sm"}`}
                            onClick={() => setTimeRange("day")}
                        >
                            Day
                        </button>
                        <button
                            className={`btn ${timeRange === "month" ? "border-btn border-btn-sm active" : "border-btn border-btn-sm"}`}
                            onClick={() => setTimeRange("month")}
                        >
                            Month
                        </button>
                        <button
                            className={`btn ${timeRange === "year" ? "border-btn border-btn-sm active" : "border-btn border-btn-sm"}`}
                            onClick={() => setTimeRange("year")}
                        >
                            Year
                        </button>
                    </div>
                          </div>
                        </div>
                        <div className="dashboard-banner-button">
                          <Link className="fill-btn-lightblue" href="#">
                            Place Bid
                          </Link>
                          <Link className="border-btn" href="/explore-arts">
                            Explore Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab-nav2"
                    role="tabpanel"
                    aria-labelledby="nav-info-tab"
                  >
                    <div className="art-info-wrapper light-effect-top">
                      <div className="dashboard-banner-text">
                        <div className="dashboard-banner-text-wrap">
                          <h1>Steampunk Robot</h1>
                        </div>
                        <div className="dashboard-banner-author">
                          <div className="dashboard-banner-author-img">
                            <Link href="/creators">
                              <Image
                                style={{ width: "100%", height: "auto" }}
                                src={prifile1}
                                alt="profile-img"
                              />
                            </Link>
                          </div>
                          <div className="dashboard-banner-author-text">
                            <h5>Brooklyn Simmons</h5>
                            <span>@queendevs_56</span>
                          </div>
                        </div>
                        <div className="dashboard-banner-box">
                          <div className="dashboard-banner-box-item">
                            <span>Current Bid</span>
                            <h4>26.72 ETH</h4>
                          </div>
                          <div className="dashboard-banner-box-item">
                            <span>Action Time</span>
                            <CounterTwo day={2} min={45} sec={15} />
                          </div>
                        </div>
                        <div className="dashboard-banner-button">
                          <Link className="fill-btn-lightblue" href="#">
                            Place Bid
                          </Link>
                          <Link className="border-btn" href="/explore-arts">
                            Explore Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab-nav3"
                    role="tabpanel"
                    aria-labelledby="nav-details-tab"
                  >
                    <div className="art-info-wrapper light-effect-top">
                      <div className="dashboard-banner-text">
                        <div className="dashboard-banner-text-wrap">
                          <h1>Steampunk Robot</h1>
                        </div>
                        <div className="dashboard-banner-author">
                          <div className="dashboard-banner-author-img">
                            <Link href="/creators">
                              <Image
                                style={{ width: "100%", height: "auto" }}
                                src={prifile1}
                                alt="profile-img"
                              />
                            </Link>
                          </div>
                          <div className="dashboard-banner-author-text">
                            <h5>Brooklyn Simmons</h5>
                            <span>@queendevs_56</span>
                          </div>
                        </div>
                        <div className="dashboard-banner-box">
                          <div className="dashboard-banner-box-item">
                            <span>Current Bid</span>
                            <h4>26.72 ETH</h4>
                          </div>
                          <div className="dashboard-banner-box-item">
                            <span>Action Time</span>
                            <CounterTwo day={2} min={45} sec={15} />
                          </div>
                        </div>
                        <div className="dashboard-banner-button">
                          <Link className="fill-btn-lightblue" href="#">
                            Place Bid
                          </Link>
                          <Link className="border-btn" href="/explore-arts">
                            Explore Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WalletConnectMain;
