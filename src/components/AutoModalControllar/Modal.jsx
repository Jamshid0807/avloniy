// ...(type === 1 && { name: number, password: password }),
// ...(type === 2 && { login: number, is_mtt: occupation }),

// components/Modal.js
import { useEffect, useState } from "react";

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
  const [occupation, setOccupation] = useState("0");
  const [captchaObj, setCaptchaObj] = useState("");
  const [errCaptcha, setErrCaptcha] = useState(false);
  const [errLogin, setErrLogin] = useState(false);

  // Register

  const [errRegister, setErrRegister] = useState("");

  // smsAcceptContent
  const [smsCode, setSmsCode] = useState();

  const splitFuncNumber = (e) => {
    const parts = e.split(/[()\-\s]+/).filter(Boolean);
    const result = parts.join("").replace("+", "");
    setNumber(result);
  };

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

    if (number.length !== 12) {
      setErrRegister("Telefon raqamni to'g'ri kiriting");
      return;
    }
    setErrRegister("");
    axios
      .post(`https://api.onlinedu.uz/api/v1/register`, {
        is_mtt: occupation,
        login: number.replace("+", ""),
      })
      .then((r) => {
        setType(4);
        sms;
        console.log(r?.data?.is_telegram);
      })
      .catch((e) => {})
      .finally(() => {});
  };
  const handleSubmitCode = (e) => {
    e.preventDefault();

    if (smsCode.length !== 5) {
      setErrRegister("Sms tuliq kiriting");
      return;
    }
    setErrRegister("");
    axios
      .post(`https://api.onlinedu.uz/api/v1/check-sms`, {
        smscode: Number(smsCode),
        login: number.replace("+", ""),
      })
      .then((r) => {})
      .catch((e) => {})
      .finally(() => {});
  };
  const handleSubmitPasswordRecovry = (e) => {
    e.preventDefault();

    if (number.length !== 12) {
      setErrRegister("Telefon raqamni to'g'ri kiriting");
      return;
    }
    setErrRegister("");
    axios
      .post(`https://api.onlinedu.uz/api/v1/forgotpassword`, {
        login: number.replace("+", ""),
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
      <div className="flex flex-col gap-3  bg-white rounded-2xl p-6 w-full max-w-xl relative shadow-xl ">
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
            splitFuncNumber={splitFuncNumber}
            onClose={onClose}
            setType={setType}
            setOccupation={setOccupation}
            occupation={occupation}
            errRegister={errRegister}
          />
        ) : type === 3 ? (
          <PasswordRecoveryContent
            splitFuncNumber={splitFuncNumber}
            handleSubmitPasswordRecovry={handleSubmitPasswordRecovry}
            number={number}
            errRegister={errRegister}
          />
        ) : type === 4 ? (
          <SmsAcceptContent
            onClose={onClose}
            handleSubmitCode={handleSubmitCode}
            errRegister={errRegister}
            setSmsCode={setSmsCode}
          />
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
