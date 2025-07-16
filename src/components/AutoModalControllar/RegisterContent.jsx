import { InputMask } from "@react-input/mask";

const RegisterContent = ({ onClose, handleSubmit, setType }) => {
  return (
    <div>
      <button
        onClick={onClose}
        className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl"
      >
        &times;
      </button>
      <h2 className="text-center text-3xl font-bold mb-4">Ro'yxatdan o'tish</h2>

      <div className="space-y-2">
        {/* Forma */}
        <form onSubmit={handleSubmit} className="space-y-2">
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
              className="block border-[1px] placeholder:text-black rounded-[10px] bg-[#f6f6f8] w-full px-3 py-2 hover:bg-white hover:border-blue-600 transition duration-300 ease-in-out"
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
          <button
            type="submit"
            className="bg-[#28caac] text-white text-xl rounded-[10px] w-full py-4 px-6"
          >
            Ro'yxatdan o'tish
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
            onClick={() => setType(1)}
            className="text-[#26caac] cursor-pointer"
          >
            Kirish
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterContent;
