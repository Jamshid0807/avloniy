import { InputMask } from "@react-input/mask";

const PasswordRecoveryContent = ({
  onClose,
  handleSubmitPasswordRecovry,
  setType,
  errRegister,
  splitFuncNumber,
  number,
}) => {
  return (
    <div className="space-y-5 mx-5 py-12">
      <button
        onClick={onClose}
        className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl"
      >
        &times;
      </button>
      <div>
        {/* Forma */}

        <form onSubmit={handleSubmitPasswordRecovry} className="space-y-2">
          <h2 className="text-center text-3xl font-bold mb-4 text-[#0d2e69]">
            Parolni tiklash
          </h2>
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
          <p className="text-red-700">{errRegister}</p>

          <button
            type="submit"
            className="bg-[#28caac] text-white text-xl rounded-[10px] w-full py-4 px-6"
          >
            Kirish
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
export default PasswordRecoveryContent;
