import { InputMask } from "@react-input/mask";
import { Input } from "antd";
import React from "react";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  SyncOutlined,
} from "@ant-design/icons";

const LoginContent = ({
  onClose,
  handleSubmit,
  setType,
  splitFuncNumber,
  setPassword,
  password,
  number,
  captchaObj,
  getCaptcha,
  setInputCaptcha,
  errCaptcha,
  inputCaptcha,
  errLogin,
}) => {
  return (
    <div className="mx-6 py-12">
      <button
        onClick={onClose}
        className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl"
      >
        &times;
      </button>
      <h2 className="text-center text-3xl font-bold mb-4">Kirish</h2>

      <div className="space-y-2">
        {/* Forma */}
        <form onSubmit={handleSubmit} className="space-y-2">
          <div>
            <label className="text-[#898da6]">Telefon raqam</label>

            <InputMask
              className="block border-[1px] placeholder:text-black rounded-[10px] bg-[#f6f6f8] w-full px-3 py-2 hover:bg-white hover:border-blue-600 transition duration-300 ease-in-out"
              placeholder="+(998)"
              onChange={(e) => splitFuncNumber(e.target.value)}
              mask="(+998) __-___-__-__"
              defaultValue={number}
              name="name"
              replacement={{ _: /\d/ }}
            />
          </div>
          <div>
            <label className="text-[#898da6]">Parol</label>
            <Input.Password
              value={password}
              name="password"
              className=" border-[1px] rounded-[10px] bg-[#f6f6f8] w-full px-3 py-2"
              onChange={(e) => setPassword(e.target.value)}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </div>
          <div className="flex items-center">
            <img src={captchaObj.img} alt="" className="h-[40px]" />

            <div className="w-[50px]">
              <input
                type="text"
                value={inputCaptcha}
                onChange={(e) => setInputCaptcha(e.target.value)}
                className=" bg-[#f6f6f8] border-[1px] px-3 py-2 w-[50px] hover:bg-white hover:border-blue-600 transition duration-300 ease-in-out"
              />
            </div>
          </div>
          <SyncOutlined onClick={getCaptcha} />

          {/* <div>
            <input
              type="checkbox"
              id="scales"
              name="scales"
              className="bg-[#28caac] p-[40px]"
            />
            <label htmlFor="scales">Scales</label>
          </div> */}
          {errCaptcha ? (
            <div className="text-red-700">Tasdiqlash kodi xato</div>
          ) : (
            ""
          )}
          {errLogin ? (
            <div className="text-red-700">
              Telefon raqam yoki parolni kiritishda xato.
            </div>
          ) : (
            ""
          )}
          <button
            type="submit"
            className="bg-[#28caac] text-white text-xl rounded-[10px] w-full py-4 px-6"
          >
            Kirish
          </button>
        </form>

        <div className="space-y-2">
          <button
            type="button"
            onClick={() => setType(3)}
            className=" block  text-[#26caac] cursor-pointer"
          >
            Parolni tiklash
          </button>
          <button
            type="button"
            onClick={() => setType(2)}
            className="text-[#26caac] cursor-pointer"
          >
            Ro'yxatdan o'tish
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginContent;
