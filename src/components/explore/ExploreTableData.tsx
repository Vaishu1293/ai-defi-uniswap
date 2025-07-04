"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Token } from "@/interFace/interFace";
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
interface propsType {
  token_data: Token;
  key: number;
}
// token: string;
//   symbol: string;
//   price: string;
//   one_h: string;
//   one_d: string;
//   fdv: string;
//   volume: string;
const ExploreTableData = ({ token_data, key }: propsType) => {
  // distructure items
  const { token, symbol, price, one_h, one_d, fdv, volume } =
    token_data;
  const id = key;
    useFlashlightAnimation();
  return (
    <div className="rank-list-row light-effect">
      <div className="rank-list-cell rank-list-cell-sl">
        <span></span>
      </div>
      <div className="rank-list-cell rank-list-cell-owner">{token} {symbol}</div>
      <div className="rank-list-cell rank-list-cell-bids">{price}</div>
      <div className="rank-list-cell rank-list-cell-hours">{one_h}</div>
      <div className="rank-list-cell rank-list-cell-days">{one_d}</div>
      <div className="rank-list-cell rank-list-cell-bids">{fdv}</div>
      <div className="rank-list-cell rank-list-cell-bids">{volume}</div>
      <div className="rank-list-cell rank-list-cell-artwotrks">
        <div className="art-item-single art-item-single-rank">
          <div className="art-item-wraper">
            <div className="art-item-inner">
              <div className="art-item-img pos-rel">
                {id}
                <Link href={`/art-details/${id}`}>
                  <Image
                    width={50}
                    height={50}
                    style={{ width: "100%", height: "auto" }}
                    src=""
                    alt="art-img"
                  />
                </Link> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreTableData;
