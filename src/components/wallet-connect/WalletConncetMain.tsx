"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeChanger from "../home/ThemeChanger";
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
import prifile1 from "../../../public/assets/img/profile/profile37.png";
import CounterTwo from "@/utils/CounterTwo";
import NiceSelect from "@/elements/niceSelect/NiceSelect";
import { crypto } from "@/data/nice-select-data";

const WalletConnectMain = () => {
  useFlashlightAnimation();
  const [marketRange, setMarketRange] = useState<"Market" | "+1%" | "+5%" | "+10%">("Market");
  const [dateRange, setDateRange] = useState<"1 Day" | "1 Week" | "1 Month" | "1 Year">("1 Day");
  const [series, setSeries] = useState<number>(2487.45);
  const selectHandler = () => { };

  const getDataForMarketRange = (range: "Market" | "+1%" | "+5%" | "+10%"): number => {
    switch (range) {
      case "Market":
        return 2487.45;
      case "+1%":
        return 2487.45 * 1.01;
      case "+5%":
        return 2487.45 * 1.05;
      case "+10%":
        return 2487.45 * 1.10;
      default:
        return 2487.45;
    }
  };

  // Update series when marketRange changes
  useEffect(() => {
    setSeries(getDataForMarketRange(marketRange));
  }, [marketRange]);

  const getDateRange = (range: "1 Day" | "1 Week" | "1 Month" | "1 Year"): string => {
    switch (range) {
      case "1 Day":
        return "1 day";
      case "1 Week":
        return "1 week";
      case "1 Month":
        return "1 month";
      case "1 Year":
        return "1 year";
      default:
        return "1 day";
    }
  };

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
                            <h4>{series.toFixed(2)}</h4>
                          </div>
                          <div className="dashboard-banner-box-item">
                            <div className="time-range-buttons d-flex gap-2 mt-3">
                              <button
                                className={` ${marketRange === "Market" ? "border-btn border-btn-sm active" : "border-btn border-btn-sm"}`}
                                onClick={() => setMarketRange("Market")}
                              >
                                Market
                              </button>
                              <button
                                className={`btn ${marketRange === "+1%" ? "border-btn border-btn-sm active" : "border-btn border-btn-sm"}`}
                                onClick={() => setMarketRange("+1%")}
                              >
                                +1%
                              </button>
                              <button
                                className={`btn ${marketRange === "+5%" ? "border-btn border-btn-sm active" : "border-btn border-btn-sm"}`}
                                onClick={() => setMarketRange("+5%")}
                              >
                                +5%
                              </button>
                              <button
                                className={`btn ${marketRange === "+10%" ? "border-btn border-btn-sm active" : "border-btn border-btn-sm"}`}
                                onClick={() => setMarketRange("+10%")}
                              >
                                +10%
                              </button>
                            </div>

                          </div>
                        </div>
                        <div className="dashboard-banner-box">
                          <div className="dashboard-banner-box-item">
                            <span>SELL</span>
                            <form action="#">
                              <div className="">
                                <NiceSelect
                                  options={crypto}
                                  defaultCurrent={0}
                                  onChange={selectHandler}
                                  name="tc-select"
                                  className="top-seller-select"
                                />
                              </div>
                            </form>
                          </div>
                          <div className="dashboard-banner-box-item">
                            <div className="single-input-unit mt-4">
                              <input type="text" defaultValue="0" autoComplete='true' placeholder="0" />
                            </div>
                          </div>
                          <div className="dashboard-banner-box-item ms-4">
                            <span>BUY</span>
                            <form action="#">
                              <div className="">
                                <NiceSelect
                                  options={crypto}
                                  defaultCurrent={0}
                                  onChange={selectHandler}
                                  name="tc-select"
                                  className="top-seller-select"
                                />
                              </div>
                            </form>
                          </div>
                          <div className="dashboard-banner-box-item ms-4">
                            <div className="single-input-unit mt-4">
                              <input type="text" defaultValue="0" autoComplete='true' placeholder="0" />
                            </div>
                          </div>
                        </div>
                        <div className="dashboard-banner-box">
                          <div className="dashboard-banner-box-item">
                            <h4 className="mt-4">Expiry</h4>
                          </div>
                          <div className="dashboard-banner-box-item">
                            <div className="time-range-buttons d-flex gap-2 mt-3">
                              <button
                                className={` ${dateRange === "1 Day" ? "border-btn border-btn-sm active" : "border-btn border-btn-sm"}`}
                                onClick={() => setDateRange("1 Day")}
                              >
                                1 Day
                              </button>
                              <button
                                className={`btn ${dateRange === "1 Week" ? "border-btn border-btn-sm active" : "border-btn border-btn-sm"}`}
                                onClick={() => setDateRange("1 Week")}
                              >
                                1 Week
                              </button>
                              <button
                                className={`btn ${dateRange === "1 Month" ? "border-btn border-btn-sm active" : "border-btn border-btn-sm"}`}
                                onClick={() => setDateRange("1 Month")}
                              >
                                1 Month
                              </button>
                              <button
                                className={`btn ${dateRange === "1 Year" ? "border-btn border-btn-sm active" : "border-btn border-btn-sm"}`}
                                onClick={() => setDateRange("1 Year")}
                              >
                                1 year
                              </button>
                            </div>

                          </div>
                        </div>
                        <div className="dashboard-banner-button">
                          <Link className="fill-btn-lightblue" href="#">
                            Connect Wallet
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
                            Connect Wallet
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
