import React from 'react';

const PoolsTableTitle = () => {
    return (
        <div className="rank-list-row-heading">
            <div className="rank-list-row">
                <div className="rank-list-cell rank-list-cell-sl">#</div>
                <div className="rank-list-cell rank-list-cell-owner">Pool</div>
                <div className="rank-list-cell rank-list-cell-market">Protocol</div>
                <div className="rank-list-cell rank-list-cell-hours">Fee tier</div>
                <div className="rank-list-cell rank-list-cell-days">TVL</div>
                <div className="rank-list-cell rank-list-cell-market">Pool APR</div>
                <div className="rank-list-cell rank-list-cell-market">Reward APR</div>
                <div className="rank-list-cell rank-list-cell-market">1D vol</div>
                <div className="rank-list-cell rank-list-cell-market">30D vol</div>
                <div className="rank-list-cell rank-list-cell-market">1D vol/TVL</div>
            </div>
        </div>
    );
};

export default PoolsTableTitle;



