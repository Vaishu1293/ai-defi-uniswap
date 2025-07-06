"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Token } from "@/interFace/interFace";
import imgTwo from "../../../public/assets/img/svg-icon/014-artwork.svg";
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
interface propsType {
  token_data: Token;
  index: number;
}
const ExploreTableData = ({ token_data, index }: propsType) => {
  const { token, symbol, price, one_h, one_d, fdv, volume } =
    token_data;
  const id = index;
    useFlashlightAnimation();
  return (
    <div className="rank-list-row light-effect">
      <div className="rank-list-cell rank-list-cell-sl">
        <span>{id.toString().padStart(2, "0")}</span>
      </div>
      <div className="rank-list-cell rank-list-cell-owner">{token} {symbol}</div>
      <div className="rank-list-cell rank-list-cell-market">{price}</div>
      <div className="rank-list-cell rank-list-cell-hours">{one_h}</div>
      <div className="rank-list-cell rank-list-cell-days">{one_d}</div>
      <div className="rank-list-cell rank-list-cell-market">{fdv}</div>
      <div className="rank-list-cell rank-list-cell-market">{volume}</div>
      <div className="rank-list-cell rank-list-cell-artwotrks">
        <div className="art-item-single art-item-single-rank">
          <div className="art-item-wraper">
            <div className="art-item-inner">
              <div className="art-item-img pos-rel">
                <Link href={`/art-details/${id}`}>
                  <Image
                    width={50}
                    height={50}
                    style={{ width: "100%", height: "auto" }}
                    src={imgTwo}
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
