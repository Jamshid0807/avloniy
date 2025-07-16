import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Pagination } from "antd";
import Filter from "./Filter";
const Card = () => {
  const navigate = useNavigate();
  const { page } = useParams();
  const currentPage = parseInt(page || "1");
  const [cardData, setCardData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [paginationTotal, setpaginationTotal] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams("");

  const paramsObject = {};
  for (const [key, value] of searchParams.entries()) {
    paramsObject[key] = value;
  }
  const keys = Object.keys(paramsObject);
  const values2 = Object.values(paramsObject);

  useEffect(() => {
    getCategory();
  }, [page, searchParams]);
  const getCategory = () => {
    setLoading(true);
    axios
      .get(
        `https://api.onlinedu.uz/api/v1/courses-home?per_page=6&type=demo&page=${
          searchParams == "" ? page : page - 1
        }&${keys + "=" + values2}&`
      )
      .then((r) => {
        setCardData(r?.data?.data);
        setpaginationTotal(r?.data?.total);
      })
      .catch((e) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  const handlefunc = (page) => {
    navigate(`/courses/${page}`);
  };
  return (
    <div className="bg-white rounded-2xl p-4">
      <Filter />

      {loading ? (
        <div className="text-center text-gray-500 py-10">Loading...</div>
      ) : cardData?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cardData.map((data, index) => (
            <div
              key={index}
              className="shadow-md rounded-lg overflow-hidden bg-white border border-gray-100 hover:shadow-lg transition duration-300"
            >
              <img
                className="w-full h-[300px] object-cover"
                src={`https://api.onlinedu.uz/storage/${data.image}`}
                alt={data.name}
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                  {data.name}
                </h1>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>Bepul | 36 kredit</p>
                  <button
                    onClick={() =>
                      navigate(`/courses/view/${data.slug}?type=demo`)
                    }
                    className="bg-[#28caac] text-white px-6 py-[9px] text-base rounded-lg hover:bg-blue-600 transition"
                  >
                    Tanlash
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-10">Ma’lumot yo‘q</div>
      )}
      <div className="flex justify-center m-[10px]">
        <Pagination
          current={currentPage}
          className="w-4 h-5 text-red-300"
          defaultCurrent={1}
          total={Math.ceil((paginationTotal * 10) / 6)}
          onChange={(page) => handlefunc(page)}
        />
      </div>
    </div>
  );
};

export default Card;
