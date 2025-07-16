import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/header_footer/v_logo.svg";
import { CiUser } from "react-icons/ci";
import { useTranslation } from "react-i18next";
import Modal from "./AutoModalControllar/Modal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    const selectedLang = e.target.value;
    i18n.changeLanguage(selectedLang);
    localStorage.setItem("i18nextLng", selectedLang);
  };
  const token = window.localStorage.getItem("token");
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
          {token ? (
            <button
              type="button"
              className="flex justify-center items-center gap-2 py-[10px] px-[15px] bg-[#26caac] hover:bg-blue-600 transition rounded-[8px] text-[#ffffff]"
            >
              <span>
                <CiUser />
              </span>
              Profil
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="flex justify-center items-center gap-2 py-[10px] px-[15px] bg-[#26caac] hover:bg-blue-600 transition rounded-[8px] text-[#ffffff]"
            >
              <span>
                <CiUser />
              </span>
              Kirish
            </button>
          )}
        </div>
      </div>

      {showModal ? <Modal onClose={() => setShowModal(false)} /> : ""}
    </header>
  );
};

export default Header;
