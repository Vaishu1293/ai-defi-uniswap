import React from 'react';

const TransactionTableTitle = () => {
    return (
        <div className="rank-list-row-heading">
            <div className="rank-list-row">
                <div className="rank-list-cell rank-list-cell-market">Time</div>
                <div className="rank-list-cell rank-list-cell-owner">Transaction</div>
                <div className="rank-list-cell rank-list-cell-market">USD</div>
                <div className="rank-list-cell rank-list-cell-hours">Token Amount</div>
                <div className="rank-list-cell rank-list-cell-days">Token Amount</div>
                <div className="rank-list-cell rank-list-cell-market">Wallet</div>
            </div>
        </div>
    );
};

export default TransactionTableTitle;