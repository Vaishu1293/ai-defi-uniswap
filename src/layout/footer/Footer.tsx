import React from "react";
import Link from "next/link";
import { getCurrentYear } from "@/utils/dateUtils";

const Footer = () => {
  const currentYear = getCurrentYear();
  return (
    <footer className="footer1-bg">
      <div className="piland-copyright-area">
        <div className="container">
          <div className="piland-copyright text-center">
            <p>© {currentYear} All rights reserved | Design & Develop by{" "}
              <Link href="https://themeforest.net/user/bdevs">BDevs</Link></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
