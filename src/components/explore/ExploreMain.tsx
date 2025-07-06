'use client';

import React, { useEffect, useState } from "react";
import ThemeChanger from "../home/ThemeChanger";
import Breadcrumbs from "@/utils/Breadcrumbs";
import Pagination from "@/utils/Pagination";
import ExploreTableTitle from "./ExploreTableTitle";
import ExploreTableData from "./ExploreTableData";
import PoolsTableTitle from "./PoolsTableTitle";
import PoolsTableData from "./PoolsTableData";
import NavContent from "./NavContent";
import { ExploreCard } from "@/data/explore-card-data";
import { exploreData } from "@/data/explore-data";
import { tokenData } from "@/data/tokenData";
import { poolData } from "@/data/poolData";
import ExploreCategorySlider from "@/elements/sliders/ExploreCategorySlider";
import TransactionTableTitle from "./TransactionTableTitle";
import TransactionTableData from "./TransactionTableData";
import { transactionData } from "@/data/transactionData";

const ExploreMain = () => {
  const [activeTab, setActiveTab] = useState(1); // 1 = Tokens, 2 = Pools
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;

  const dataSource = activeTab === 1
    ? tokenData
    : activeTab === 2
      ? poolData
      : transactionData;
  const totalPages = Math.ceil(dataSource.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const currentData = dataSource.slice(startIndex, startIndex + perPage);

  // Reset to page 1 when tab changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <ThemeChanger />
      <Breadcrumbs breadcrumbTitle="Explore" breadcrumbSubTitle="Explore" />

      <div className="art-ranking-area pb-10">
        <div className="container">
          <div className="row wow fadeInUp">
            <div className="col-lg-12">
              <div>
                {ExploreCard.length && (
                  <div className="row wow fadeInUp">
                    <ExploreCategorySlider />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="activity-area pb-10">
            <div className="container">
              <div className="activity-wrapper mb-40">
                <div className="activity-tab">

                  {/* Tab Navigation */}
                  <div className="activity-tab-nav wow fadeInUp">
                    <NavContent activeTab={activeTab} setActiveTab={setActiveTab} />
                  </div>

                  {/* Tab Content */}
                  <div className="activity-tab-contents mb-30 wow fadeInUp">
                    <div className="tab-content" id="nav-tabContent">
                      {exploreData.map((item) => (
                        <div
                          key={item.id}
                          className={`tab-pane fade ${item.id === activeTab ? "active show" : ""}`}
                          id={item.tabId}
                          role="tabpanel"
                          aria-labelledby={item.ariaLabelledby}
                        >
                          <div className="activity-wrapper-actions activity-wrapper-all mb-30">
                            <div className="rank-list-container wow fadeInUp">
                              <div className="rank-list-wrapper mb-20">

                                {/* Tab Table Titles */}
                                {activeTab === 1 && <ExploreTableTitle />}
                                {activeTab === 2 && <PoolsTableTitle />}
                                {activeTab === 3 && <TransactionTableTitle />}

                                <div className="rank-list-items">
                                  {currentData.map((data, i) => {
                                    const serial = startIndex + i + 1;

                                    return (
                                      <div key={serial}>
                                        {activeTab === 1 && (
                                          <ExploreTableData index={serial} token_data={data} />
                                        )}
                                        {activeTab === 2 && (
                                          <PoolsTableData index={serial} pool_data={data} />
                                        )}
                                        {activeTab === 3 && (
                                          <TransactionTableData transaction_data={data} />
                                        )}
                                      </div>
                                    );
                                  })}

                                </div>
                              </div>
                            </div>

                            <div className="row wow fadeInUp">
                              <div className="col-12">
                                <Pagination
                                  currentPage={currentPage}
                                  totalPages={totalPages}
                                  onPageChange={handlePageChange}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default ExploreMain;
