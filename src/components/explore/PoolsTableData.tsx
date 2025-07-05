"use client";
import React from "react";
import { Pool } from "@/interFace/interFace";
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
interface propsType {
  pool_data: Pool;
  index: number;
}

const PoolsTableData = ({ pool_data, index }: propsType) => {
  const { pool, protocol, free_tier, tvl, pool_apr, reward_apr, one_vol, thirty_vol, one_vol_tvl } =
    pool_data;
  const id = index;
    useFlashlightAnimation();
  return (
    <div className="rank-list-row light-effect">
      <div className="rank-list-cell rank-list-cell-sl">
        <span>{id.toString().padStart(2, "0")}</span>
      </div>
      <div className="rank-list-cell rank-list-cell-owner">{pool}</div>
      <div className="rank-list-cell rank-list-cell-bids">{protocol}</div>
      <div className="rank-list-cell rank-list-cell-bids">{free_tier}</div>
      <div className="rank-list-cell rank-list-cell-bids">{tvl}</div>
      <div className="rank-list-cell rank-list-cell-bids">{pool_apr}</div>
      <div className="rank-list-cell rank-list-cell-hours">{reward_apr}</div>
      <div className="rank-list-cell rank-list-cell-bids">{one_vol}</div>
      <div className="rank-list-cell rank-list-cell-bids">{thirty_vol}</div>
      <div className="rank-list-cell rank-list-cell-bids">{one_vol_tvl}</div>
    </div>
  );
};

export default PoolsTableData;
