import { useEffect, useState } from "react";
import axios from "axios";
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
  }, []);
  const getCategory = () => {
    setLoading(true);
    axios
      .get(`https://api.onlinedu.uz/api/v1/paid/categories`)
      .then((r) => {
        setData(r?.data?.data);
      })
      .catch((e) => {})
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      {loading ? (
        <div>loading.....</div>
      ) : (
        <div className="flex justify-between gap-5 bg-[#f8f8fa] p-[25px] rounded-[15px] mb-[50px]">
          <select
            name=""
            id=""
            className="min-w-[310px] rounded-xl py-[0.5941rem] px-2"
          >
            {data.map((item, index) => {
              return (
                <option value={item.id} key={index}>
                  {item.name}
                </option>
              );
            })}
          </select>
          <input type="text" className="rounded-xl py-[0.5941rem] px-2" />
          <input type="text" className="rounded-xl py-[0.5941rem] px-2" />
          <select name="" id="" className="rounded-xl py-[0.5941rem] px-2">
            <option value="">Barcha tillar</option>
          </select>
          <button className="bg-[#28caac] text-white px-6 py-[9px] text-base rounded-lg hover:bg-blue-600 transition">
            Qidiruv
          </button>
          <h1>{t("welcome")}</h1>
        </div>
      )}
    </>
  );
};

export default Filter;
