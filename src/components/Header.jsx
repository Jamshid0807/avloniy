import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/header_footer/v_logo.svg";
import { CiUser } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const Header = () => {
  const { i18n } = useTranslation();
  const handleChange = (e) => {
    const selectedLang = e.target.value;
    i18n.changeLanguage(selectedLang);
    localStorage.setItem("i18nextLng", selectedLang);
  };
  return (
    <header>
      <div className="flex justify-between items-center">
        <a href="/" className="w-20 h-[23px]">
          <img src={logo} alt="" />
        </a>
        <div className="flex gap-5">
          <select onChange={handleChange} value={i18n.language}>
            <option value="ru">Rus</option>
            <option value="uz">Uzbek</option>
          </select>

          <button className="flex justify-center items-center gap-2 py-[10px] px-[15px] bg-[#26caac] hover:bg-blue-600 transition rounded-[8px] text-[#ffffff]">
            <span>
              <CiUser />
            </span>
            Kirish
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
