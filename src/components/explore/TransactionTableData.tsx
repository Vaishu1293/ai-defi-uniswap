"use client";
import React from "react";
import { Transaction } from "@/interFace/interFace";
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
interface propsType {
  transaction_data: Transaction;
}
const TransactionTableData = ({ transaction_data }: propsType) => {
console.log(transaction_data);
  const { time, transaction, usd, from_amount, to_amount, wallet } =
    transaction_data;
    useFlashlightAnimation();
  return (
    <div className="rank-list-row light-effect">
        <div className="rank-list-cell rank-list-cell-market">{time}</div>
      <div className="rank-list-cell rank-list-cell-owner">{transaction}</div>
      <div className="rank-list-cell rank-list-cell-market">{usd}</div>
      <div className="rank-list-cell rank-list-cell-hours">{from_amount}</div>
      <div className="rank-list-cell rank-list-cell-days">{to_amount}</div>
      <div className="rank-list-cell rank-list-cell-market">{wallet}</div>
    </div>
  );
};

export default TransactionTableData;
