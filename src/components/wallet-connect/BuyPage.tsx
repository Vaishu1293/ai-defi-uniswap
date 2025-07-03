"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import useFlashlightAnimation from "@/hooks/useFlashlightAnimation";
import NiceSelect from "@/elements/niceSelect/NiceSelect";
import { crypto, countries } from "@/data/nice-select-data";

const BuyPage = () => {
  useFlashlightAnimation();

  const [amountRange, setAmountRange] = useState<"$100" | "$300" | "$1000">("$100");
  const [usdAmount, setUsdAmount] = useState<number>(100);
  const [ethAmount, setEthAmount] = useState<number>(0.039); // default: $100 → ETH

  const ETH_RATE = 2564; // Simulated ETH price in USD

  // Handle when user clicks $100, $300, or $1000
  const handleAmountButton = (range: "$100" | "$300" | "$1000") => {
    setAmountRange(range);
    const numeric = Number(range.replace("$", ""));
    setUsdAmount(numeric);
  };

  // Handle manual input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setUsdAmount(value);
  };

  // Recalculate ETH value whenever USD amount changes
  useEffect(() => {
    setEthAmount(usdAmount / ETH_RATE);
  }, [usdAmount]);

  const selectHandler = () => { };

  return (
    <div className="dashboard-banner-text">
      <div className="dashboard-banner-box">
        <div className="dashboard-banner-box-item">
          <span>You are buying</span>
          <form action="#">
            <NiceSelect
              options={countries}
              defaultCurrent={0}
              onChange={selectHandler}
              name="country"
              className="top-seller-select"
            />
          </form>
        </div>

        <div className="dashboard-banner-box-item">
          <div className="single-input-unit mt-4">
            <input
              type="number"
              value={usdAmount}
              onChange={handleInputChange}
              placeholder="0"
              autoComplete="true"
            />
          </div>
        </div>

        <div className="dashboard-banner-box-item">
          <h4 className="m-4 p-4">{ethAmount.toFixed(6)} ETH</h4>
        </div>
      </div>

      <div className="dashboard-banner-box">
        <div className="dashboard-banner-box-item">
          <form action="#">
            <NiceSelect
              options={crypto}
              defaultCurrent={0}
              onChange={selectHandler}
              name="token"
              className="top-seller-select"
            />
          </form>
        </div>

        <div className="dashboard-banner-box-item">
          <div className="time-range-buttons d-flex gap-2 mt-3">
            <button
              className={`border-btn border-btn-sm ${amountRange === "$100" ? "active" : ""}`}
              onClick={() => handleAmountButton("$100")}
              type="button"
            >
              $100
            </button>
            <button
              className={`border-btn border-btn-sm ${amountRange === "$300" ? "active" : ""}`}
              onClick={() => handleAmountButton("$300")}
              type="button"
            >
              $300
            </button>
            <button
              className={`border-btn border-btn-sm ${amountRange === "$1000" ? "active" : ""}`}
              onClick={() => handleAmountButton("$1000")}
              type="button"
            >
              $1000
            </button>
          </div>
        </div>
      </div>

      <div className="dashboard-banner-button">
        <Link className="fill-btn-lightblue" href="#">
          Connect Wallet
        </Link>
      </div>
    </div>
  );
};

export default BuyPage;
