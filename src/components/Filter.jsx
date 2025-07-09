import { useEffect, useState } from "react";
import axios from "axios";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const Filter = () => {
  const { t } = useTranslation();
  const language_items = [
    {
      key: "uz",
      label: <span>O‘zbekcha</span>,
      onClick: () => i18n.changeLanguage("uz"),
    },
    {
      key: "ru",
      label: <span>Русский</span>,
      onClick: () => i18n.changeLanguage("ru"),
    },
  ];

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getCategory();
  }, [i18n.language]);

  const getCategory = () => {
    setLoading(true);
    axios
      .get(`https://api.onlinedu.uz/api/v1/paid/categories`, {
        headers: {
          lang: localStorage.getItem("i18nextLng") || "uz",
        },
      })
      .then((r) => {
        setData(r?.data?.data);
      })
      .catch((e) => {
        console.error("Kategoriya olishda xatolik:", e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {loading ? (
        <div>loading.....</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 bg-[#f8f8fa] p-[25px] rounded-[15px] mb-[50px]">
          <div className="flex flex-col gap-[6px] text-[#898da6]">
            <label htmlFor="kategoriya">Kategoriyalar</label>
            <select
              id="kategoriya"
              className="w-full rounded-xl py-[0.5941rem] px-2"
            >
              {data.map((item, index) => (
                <option value={item.id} key={index}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-[6px] text-[#898da6]">
            <label htmlFor="min_davomiyligi">Min. davomiyligi</label>
            <input
              type="text"
              id="min_davomiyligi"
              placeholder="Min. davomiyligi"
              className="w-full rounded-xl py-[0.5941rem] px-2"
            />
          </div>

          <div className="flex flex-col gap-[6px] text-[#898da6]">
            <label htmlFor="maks_davomiyligi">Maks. davomiyligi</label>
            <input
              type="text"
              id="maks_davomiyligi"
              placeholder="Maks. davomiyligi"
              className="w-full rounded-xl py-[0.5941rem] px-2"
            />
          </div>

          <div className="flex flex-col gap-[6px] text-[#898da6]">
            <label htmlFor="til">Til</label>
            <select id="til" className="w-full rounded-xl py-[0.5941rem] px-2">
              <option value="">Barcha tillar</option>
            </select>
          </div>

          <div className="flex flex-col justify-end">
            <button className="bg-[#28caac] whitespace-nowrap    text-white px-6 py-[9px] text-base rounded-lg hover:bg-blue-600 transition">
              Qidiruvni boshlash
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Filter;
