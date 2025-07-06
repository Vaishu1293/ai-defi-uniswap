"use client";
import { CryptoNetwork, Protocol, TradeVolume } from "@/data/nice-select-data";
import NiceSelect from "@/elements/niceSelect/NiceSelect";
import React from "react";

interface NavContentProps {
  activeTab: number;
  setActiveTab: (tab: number) => void;
}

const NavContent: React.FC<NavContentProps> = ({ activeTab, setActiveTab }) => {
  const selectHandler = () => { };

  return (
    <>
      <nav>
        <div className="nav nav-tabs mb-30" id="nav-tab" role="tablist">
          <button
            className={`nav-link ${activeTab === 1 ? "active" : ""}`}
            id="nav-token-tab"
            type="button"
            role="tab"
            aria-selected={activeTab === 1}
            onClick={() => setActiveTab(1)}
          >
            <span className="activity-nav-button">Token</span>
          </button>
          <button
            className={`nav-link ${activeTab === 2 ? "active" : ""}`}
            id="nav-pools-tab"
            type="button"
            role="tab"
            aria-selected={activeTab === 2}
            onClick={() => setActiveTab(2)}
          >
            <span className="activity-nav-button">Pools</span>
          </button>
          <button
            className={`nav-link ${activeTab === 3 ? "active" : ""}`}
            id="nav-transactions-tab"
            type="button"
            role="tab"
            aria-selected={activeTab === 3}
            onClick={() => setActiveTab(3)}
          >
            <span className="activity-nav-button">Transactions</span>
          </button>
        </div>

        <div className="filter-by-sale d-flex mb-30">

          {/* Always show Network */}
          <div>
            <NiceSelect
              options={CryptoNetwork}
              defaultCurrent={0}
              onChange={selectHandler}
              name=""
              className="sale-category-select"
            />
          </div>

          {/* Search Input Field */}
          <form action="#" className="filter-search-input header-search d-none d-xl-inline-block">
            <input
              type="text"
              placeholder={
                activeTab === 1
                  ? "Search tokens"
                  : activeTab === 2
                  ? "Search pools"
                  : "Search transactions"
              }
            />
            <button><i className="fal fa-search"></i></button>
          </form>

          {/* Tab-specific dropdowns */}
          {activeTab === 1 && (
            <div>
              <NiceSelect
                options={TradeVolume}
                defaultCurrent={0}
                onChange={selectHandler}
                name=""
                className="sale-category-select"
              />
            </div>
          )}

          {activeTab === 2 && (
            <div>
              <NiceSelect
                options={Protocol}
                defaultCurrent={0}
                onChange={selectHandler}
                name=""
                className="sale-category-select"
              />
            </div>
          )}

        </div>
      </nav>
    </>
  );
};

export default NavContent;
