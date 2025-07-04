"use client"
import ThemeChanger from "../home/ThemeChanger";
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
import BuyPage from "./BuyPage";
import SellPage from "./SellPage";
import LimitPage from "./LimitPage";

const TradeMain = () => {
  useFlashlightAnimation();

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
                      <LimitPage />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab-nav2"
                    role="tabpanel"
                    aria-labelledby="nav-info-tab"
                  >
                    <div className="art-info-wrapper light-effect-top">
                      <BuyPage />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tab-nav3"
                    role="tabpanel"
                    aria-labelledby="nav-details-tab"
                  >
                    <div className="art-info-wrapper light-effect-top">
                      <SellPage />
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

export default TradeMain;
