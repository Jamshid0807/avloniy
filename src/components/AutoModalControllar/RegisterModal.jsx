// components/Modal.js
import { useState } from "react";
import React from "react";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { InputMask } from "@react-input/mask";
import axios from "axios";

const RegisterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [nomer, setNomer] = useState("");
  const [occupation, setOccupation] = useState("");

  const splitFuncNomer = (e) => {
    const parts = e.split(/[()\-\s]+/).filter(Boolean);
    const result = parts.join("");
    setNomer(result);
  };
  const handleSubmit = () => {
    axios
      .post(`https://api.onlinedu.uz/api/v1/login`, {
        login: nomer,
        is_mtt: occupation,
      })
      .then((r) => {})
      .catch((e) => {})
      .finally(() => {});
    console.log(nomer);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="flex flex-col gap-3  bg-white rounded-2xl p-6 w-full max-w-md relative shadow-xl ">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl"
        >
          &times;
        </button>

        <h2 className="text-center text-3xl font-bold mb-4">
          Ro'yxatdan o'tish
        </h2>
        <div>
          <label className="text-[#898da6]">Telefon raqam</label>

          <InputMask
            className="block border-[1px] placeholder:text-black rounded-[10px] bg-[#f6f6f8] w-full px-3 py-2 hover:bg-white hover:border-blue-600 transition duration-300 ease-in-out"
            placeholder="+(998)"
            onChange={(e) => splitFuncNomer(e.target.value)}
            mask="(+998) ___-__-__"
            replacement={{ _: /\d/ }}
          />
        </div>
        <div>
          <label className="text-[#898da6]">Foydalanuvchini tanlang</label>
          <select
            className="border-[1px] rounded-[10px] bg-[#f6f6f8] w-full px-3 py-2"
            onChange={(e) => setOccupation(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled>
              Foydalanuvchini tanlang
            </option>
            <option value="0">Maktab Xodimlari</option>
            <option value="1">MTT xodimlari</option>
          </select>
        </div>
        <div>
          <input
            type="checkbox"
            id="scales"
            name="scales"
            className="bg-[#28caac] p-[40px]"
          />
          <label htmlFor="scales">Scales</label>
        </div>
        <div>
          <button
            type="submit"
            className="bg-[#28caac] text-white text-xl rounded-[10px] w-full py-4 px-6"
            onClick={handleSubmit}
          >
            Kirish
          </button>
        </div>
        <div>
          <a className="mb-3 block  text-[#26caac] cursor-pointer">
            Parolni tiklash
          </a>
          <a
            className="text-[#26caac] cursor-pointer"
            // onClick={onSwitchToRegister}
          >
            Ro'yxatdan o'tish
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
