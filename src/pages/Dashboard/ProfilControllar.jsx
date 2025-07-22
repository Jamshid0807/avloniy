import React from "react";
import Profil from "./Profil";
import { FaUsers, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProfilControllar = () => {
  return (
    <div className="container mx-auto grid grid-cols-6 h-[500px]">
      <div>
        <ul className="space-y-3 cursor-pointer">
          <Link
            to="/dashboard/profile"
            className="text-[#0d2e69] hover:text-[#26caac] flex items-center gap-2 font-[700] text-sm"
          >
            <FaUsers></FaUsers> Mening Profilim
          </Link>
          <Link
            to="/dashboard/sozlamalar"
            className="text-[#0d2e69] hover:text-[#26caac] flex items-center gap-2 font-[700] text-sm"
          >
            <FaCog></FaCog> Sozlamalar
          </Link>
          <Link
            to="/dashboard/chiqish"
            className="text-[#0d2e69] hover:text-[#26caac] flex items-center gap-2 font-[700] text-sm"
          >
            <FaUsers></FaUsers> Chiqish
          </Link>
        </ul>
      </div>
      <div className="col-span-5 bg-[#f5f5f5]">
        <Profil />
      </div>
    </div>
  );
};

export default ProfilControllar;
