import React from 'react';

const ExploreTableTitle = () => {
    return (
        <div className="rank-list-row-heading">
            <div className="rank-list-row">
                <div className="rank-list-cell rank-list-cell-sl">#</div>
                <div className="rank-list-cell rank-list-cell-owner">Token Name</div>
                {/* <div className="rank-list-cell rank-list-cell-artwotrks">Token Name</div> */}
                <div className="rank-list-cell rank-list-cell-market">Price</div>
                <div className="rank-list-cell rank-list-cell-hours">1 H</div>
                <div className="rank-list-cell rank-list-cell-days">1 D</div>
                <div className="rank-list-cell rank-list-cell-market">FDV</div>
                <div className="rank-list-cell rank-list-cell-market">Volume</div>
                <div className="rank-list-cell rank-list-cell-artworks">1D Chart</div>
            </div>
        </div>
    );
};

export default ExploreTableTitle;