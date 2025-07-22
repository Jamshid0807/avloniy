import { InputMask } from "@react-input/mask";
import { Input } from "antd";
import React from "react";
import { FaBriefcase, FaEdit } from "react-icons/fa";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  SyncOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const Profil = () => {
  return (
    <div>
      <div className="mx-6">
        <p className="text-[#0d2e69] my-5 font-[700] text-[1.125rem] font-sans">
          Mening profilim
        </p>
        <div className="flex justify-between items-center bg-white rounded-xl">
          <div className="flex items-center gap-2 p-5">
            <img
              src="https://api.onlinedu.uz/storage/users/default.png"
              alt=""
            />
            <span className="icon icon-briefcase"></span>
            <FaBriefcase className="text-[#898da6]"></FaBriefcase>
            <span className="text-[#898da6]">{"(, )"}</span>
          </div>
          <button className="flex items-center gap-2 bg-[#edeff3] hover:bg-gray-500 hover:text-white transition duration-300 mx-5 text-[#212529] px-5 py-2 rounded-[10px]">
            <FaEdit></FaEdit>
            <Link to="/dashboard/profile/edit">O'zgarish</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profil;
