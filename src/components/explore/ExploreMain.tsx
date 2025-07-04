import React from "react";
import ThemeChanger from "../home/ThemeChanger";
import Breadcrumbs from "@/utils/Breadcrumbs";
import ExploreCategorySlider from "@/elements/sliders/ExploreCategorySlider";
import Pagination from "@/utils/Pagination";
import ExploreTableTitle from "./ExploreTableTitle";
import ExploreTableData from "./ExploreTableData";
import { tokenData } from "@/data/tokenData";

const ExploreMain = () => {
  return (
    <>
      <ThemeChanger />
      <Breadcrumbs breadcrumbTitle="Item Ranking" breadcrumbSubTitle="Item Ranking" />
        <div className="art-ranking-area pb-10">
            <div className="container">
                <div className="row wow fadeInUp">
                    <div className="col-lg-12">
                        <ExploreCategorySlider/>
                    </div>
                </div>
                <div className="rank-list-container wow fadeInUp">
                    <div className="rank-list-wrapper mb-20">
                        <ExploreTableTitle/>

                        <div className="rank-list-items">
                            {
                                tokenData.slice(24, 34).map((token_data, index) => <ExploreTableData key={index} token_data={token_data} />)
                            }
                        </div>
                    </div>
                </div>
                <div className="row wow fadeInUp">
                    <div className="col-12">
                        <Pagination/>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default ExploreMain;
