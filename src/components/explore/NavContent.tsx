"use client";
import { Time } from "@/data/nice-select-data";
import NiceSelect from "@/elements/niceSelect/NiceSelect";
import React from "react";

interface NavContentProps {
  activeTab: number;
  setActiveTab: (tab: number) => void;
}

const NavContent: React.FC<NavContentProps> = ({ activeTab, setActiveTab }) => {
  const selectHandler = () => {};

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
        </div>

        <div className="filter-by-sale d-flex mb-30">
          <div className="select-category-title">
            <i className="flaticon-filter"></i> Filters by
          </div>
          <div>
            <NiceSelect
              options={Time}
              defaultCurrent={0}
              onChange={selectHandler}
              name=""
              className="sale-category-select"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavContent;
