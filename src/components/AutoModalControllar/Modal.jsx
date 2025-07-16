// components/Modal.js
import { useEffect, useState } from "react";
import React from "react";
import { Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { InputMask } from "@react-input/mask";
import axios from "axios";
import LoginContent from "./LoginContent";
import RegisterContent from "./RegisterContent";
import PasswordRecoveryContent from "./PasswordRecoveryContent";
import SmsAcceptContent from "./SmsAcceptContent";
import TelegramAcceptContent from "./TelegramAcceptContent";

const Modal = ({ onClose }) => {
  const [type, setType] = useState(1);
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [inputCaptcha, setInputCaptcha] = useState("");
  const [occupation, setOccupation] = useState("");
  const [captchaObj, setCaptchaObj] = useState("");
  const [errCaptcha, setErrCaptcha] = useState(false);
  const [errLogin, setErrLogin] = useState(false);

  const splitFuncNumber = (e) => {
    const parts = e.split(/[()\-\s]+/).filter(Boolean);
    const result = parts.join("");
    setNumber(result);
  };

  // ...(type === 1 && { name: number, password: password }),
  // ...(type === 2 && { login: number, is_mtt: occupation }),

  const getCaptcha = () => {
    axios
      .get(`https://api.onlinedu.uz/captcha/api/math`)
      .then((r) => {
        setCaptchaObj(r?.data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {});
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(`https://api.onlinedu.uz/api/v1/login`, {
        captcha: Number(inputCaptcha),
        key: captchaObj?.key,
        name: number.replace("+", ""),
        password: password,
      })
      .then((r) => {
        const token = r?.data?.access_token;
        window.localStorage.setItem("token", token);
        setErrCaptcha(false);
        setErrLogin(false);
        onClose();
      })
      .catch((e) => {
        console.log(e);

        const eData = e?.response?.data;
        if (eData?.errors?.captcha?.length > 0) {
          setErrCaptcha(true);
        } else {
          setErrCaptcha(false);
        }
        if (eData?.error == "Unauthorized") {
          setErrLogin(true);
        } else {
          setErrLogin(false);
        }
        setInputCaptcha("");
        getCaptcha();
      })
      .finally(() => {});
  };
  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post(`https://api.onlinedu.uz/api/v1/login`, {
        ...(type === 1 && { name: number, password: password }),
        ...(type === 2 && { login: number, is_mtt: occupation }),
      })
      .then((r) => {})
      .catch((e) => {})
      .finally(() => {});
  };

  useEffect(() => {
    getCaptcha();
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="flex flex-col gap-3  bg-white rounded-2xl p-6 w-full max-w-md relative shadow-xl ">
        {type === 1 ? (
          <LoginContent
            handleSubmit={handleLogin}
            onClose={onClose}
            setType={setType}
            splitFuncNumber={splitFuncNumber}
            setPassword={setPassword}
            password={password}
            number={number}
            captchaObj={captchaObj}
            getCaptcha={getCaptcha}
            setInputCaptcha={setInputCaptcha}
            errCaptcha={errCaptcha}
            inputCaptcha={inputCaptcha}
            errLogin={errLogin}
          />
        ) : type === 2 ? (
          <RegisterContent
            handleSubmit={handleRegister}
            onClose={onClose}
            setType={setType}
          />
        ) : type === 3 ? (
          <PasswordRecoveryContent />
        ) : type === 4 ? (
          <SmsAcceptContent />
        ) : type === 5 ? (
          <TelegramAcceptContent />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Modal;
