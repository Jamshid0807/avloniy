// Fayl: CourseDetail.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const CourseDetail = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pagePresent, setpagePresent] = useState(true);
  console.log(slug);
  useEffect(() => {
    if (slug) {
      axios
        .get(
          `https://api.onlinedu.uz/api/v1/courses-home?per_page=6&type=demo&page=${pagePresent}&`
        )
        .then((res) => {
          setCourse(res?.data?.data);
        })
        .catch((err) => {
          console.error("Kurs topilmadi:", err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [slug]);
  console.log(slug);
  if (loading) return <div>Yuklanmoqda...</div>;
  if (!course) return <div>Kurs topilmadi.</div>;
  console.log(course);
  return (
    <div className="p-4">
      {course.map((item, index) => (
        <h3 key={index} className="mb-8">
          {item.id == slug ? item.name : ""}
        </h3>
      ))}
      <div className="grid grid-cols-4 gap-4">
        <div>
          03.10.2024 sanadagi KRK va 10.10.2024 sanadagi KRS uchun o'quv-metodik
          materiallar
        </div>
        <div className="col-span-2">
          O'zbekiston Respublikasi Prezidentining 2024-yil 21-iyundagi 231-son
          qarori bilan Maktabgacha va maktab ta’limi tashkilotlari rahbar,
          pedagog va mutaxassis kadrlarini uzluksiz kasbiy rivojlantirish tizimi
          samaradorligini ta’minlash, ularning kasbiy bilim, konikma va
          mahoratini muntazam oshirib borish, Prezident maktablarida toplangan
          ilgor tajribalarni umumiy orta ta’lim muassasalariga keng tatbiq etish
          belgilandi. O'zbekiston Respublikasi Maktabgacha va maktab ta’limi
          vazirining 2024-yil 7-avgustdagi "Umumiy orta ta’lim muassasalari
          oqituvchilari uchun “Kasbiy rivojlanish kuni” va “Kasbiy rivojlanish
          soati” tadbirlarini bosqichma-bosqich joriy etish togrisida"gi 246-son
          buyrug'i bilan Umumiy orta talim muassasalari oqituvchilari uchun
          “Kasbiy rivojlanish kuni” va “Kasbiy rivojlanish soati” tadbirlarini
          tashkil etish TARTIBI tasdiqlandi. Siz ushbu sahifa orqali “Kasbiy
          rivojlanish kuni” va “Kasbiy rivojlanish soati” tadbirlari uchun
          tayyorlangan o'quv-metodik materiallar bilan tanishishingiz mumkin.
        </div>
        <div>
          {course.map((item, index) => (
            <img
              key={index}
              src={
                item.slug == slug
                  ? `https://api.onlinedu.uz/storage/${item.image}`
                  : {}
              }
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
