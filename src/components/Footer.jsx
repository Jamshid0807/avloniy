import React from "react";
import nazirov from "../assets/header_footer/nazirov.png";
const Footer = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        © 2020-2025 Copyright.
        <span className="text-[#28caac]">Barcha huquqlar himoyalangan.</span>
      </div>
      <div className="flex justify-center items-center gap-[10px] text-[#0d2e69]">
        <span>developed by</span>
        <img className="w-25 h-[71px]" src={nazirov} alt="" />
      </div>
    </div>
  );
};

export default Footer;
