'use client';

import React, { useState } from "react";
import ThemeChanger from "../home/ThemeChanger";
import Breadcrumbs from "@/utils/Breadcrumbs";
import ExploreCategorySlider from "@/elements/sliders/ExploreCategorySlider";
import Pagination from "@/utils/Pagination";
import ExploreTableTitle from "./ExploreTableTitle";
import ExploreTableData from "./ExploreTableData";
import { tokenData } from "@/data/tokenData";

const ExploreMain = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 5;
    const totalPages = Math.ceil(tokenData.length / perPage);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const startIndex = (currentPage - 1) * perPage;
    const currentData = tokenData.slice(startIndex, startIndex + perPage);

    return (
        <>
            <ThemeChanger />
            <Breadcrumbs breadcrumbTitle="Item Ranking" breadcrumbSubTitle="Item Ranking" />
            <div className="art-ranking-area pb-10">
                <div className="container">
                    <div className="row wow fadeInUp">
                        <div className="col-lg-12">
                            <ExploreCategorySlider />
                        </div>
                    </div>
                    <div className="rank-list-container wow fadeInUp">
                        <div className="rank-list-wrapper mb-20">
                            <ExploreTableTitle />
                            <div className="rank-list-items">
                                {currentData.map((token_data, i) => {
                                    const serial = startIndex + i + 1;
                                    return (
                                        <ExploreTableData index={serial} token_data={token_data} key={i} />
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
        </>
    );
};

export default ExploreMain;
