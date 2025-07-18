import { InputMask } from "@react-input/mask";

const SmsAcceptContent = ({
  onClose,
  handleSubmitCode,
  setType,
  errRegister,
  setSmsCode,
}) => {
  return (
    <div className="space-y-5 mx-5 py-12">
      <button
        onClick={onClose}
        className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl"
      >
        &times;
      </button>
      <div className="text-center">
        <h2 className="text-center text-3xl font-bold mb-4 text-[#0d2e69]">
          Telegram Bot orqali tasdiqlash
        </h2>
        <p className="block mb-4 text-[#898da6] font-[500]">
          Bizning telegram botimizga a'zo bo'ling. Botimiz orqali tastiqlash
          kodini oling.
        </p>
        <a
          className="text-base text-white px-6 py-[9px] bg-[#28caac] rounded-[10px]"
          href="https://t.me/avloniy_onlinedu_bot"
          target="_blank"
        >
          Botga a'zo bo'lish
        </a>
      </div>
      <div>
        {/* Forma */}

        <form onSubmit={handleSubmitCode} className="space-y-2">
          <label htmlFor="tasdiq" className="text-[#898da6] font-[400]">
            Telegram Botdan olingan tasdiqlash kodi
          </label>
          <input
            type="text"
            target="_blank"
            id="tasdiq"
            onChange={(e) => setSmsCode(e.target.value)}
            placeholder="Telegram Botdan olingan tasdiqlash kodi"
            className="w-full bg-[#f6f6f8] border-[1px] px-3 py-2 rounded-xl hover:bg-white hover:border-blue-600 transition duration-300 ease-in-out"
          />
          <p className="text-red-700">{errRegister}</p>

          <button
            type="submit"
            className="bg-[#28caac] text-white text-xl rounded-[10px] w-full py-4 px-6"
          >
            Yuborish
          </button>
        </form>
      </div>
      <div className="space-y-2">
        <div className="space-y-2">
          <button
            type="button"
            onClick={() => setType(1)}
            className=" block  text-[#26caac] cursor-pointer"
          >
            Kirish
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
export default SmsAcceptContent;
