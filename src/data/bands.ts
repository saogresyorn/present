// src/data/bands.ts
import type { Band } from "@/types/band";

export const mockBands: Band[] = [
  {
    id: 1,
    name: "Loso (โลโซ)",
    genre: "Rock / Pop Rock",
    image: "/images/bands/loso.jpg",
    description: "วงร็อกระดับตำนานของไทย นำโดย เสก โลโซ เจ้าของเพลงฮิตยุค 90s มากมาย",
    members: [
      { id: 101, name: "เสก (เสกสรรค์ ศุขพิมาย)", role: "ร้องนำ / กีตาร์", image: "/images/members/sek.jpg" },
      { id: 102, name: "ใหญ่ (กิตติศักดิ์ โคตรคำ)", role: "กลอง", image: "/images/members/yai.jpg" },
      { id: 103, name: "รัฐ (อภิรัฐ สุขจิตร์)", role: "เบส", image: "/images/members/rat.jpg" },
    ],
  },
  {
    id: 2,
    name: "Inca (อินคา)",
    genre: "Pop Rock / Country Rock",
    image: "/images/bands/inca.jpg",
    description: "วงดนตรีระดับตำนานยุค 90s เจ้าของเพลงฮิตตลอดกาลอย่าง 'หมากเกมนี้' และ 'ขอเริ่มใหม่'",
    members: [
      { id: 201, name: "ศักดา พัทธสีมา (ดา)", role: "ร้องนำ / กีต้าร์คอร์ด/กีตาร์ลีด", image: "/images/members/das.jpg" },
      { id: 202, name: "จารุวัฒน์ วิเศษสมบัติ (อ้อม)", role: "กีต้าร์คอร์ด/ร้องเพลง", image: "/images/members/aom.jpg" },
      { id: 203, name: "นล สิงหลกะ (อ๋อ)", role: "กลอง/ร้องนำ", image: "/images/members/or.jpg" },
      { id: 204, name: "ปิติ ดวงพิกุล (ป๊อบ)", role: "เบส", image: "/images/members/pop.jpg" },
      { id: 205, name: "วรวิทย์ พิกุลทอง (บอย)", role: "คีย์บอร์ด/ร้องนำ", image: "/images/members/boy.jpg" },
    ],
  },
  {
    id: 3,
    name: "Bodyslam (บอดี้สแลม)",
    genre: "Rock / Alternative Rock",
    image: "/images/bands/bodyslam.jpg",
    description: "วงร็อกระดับแนวหน้าของเมืองไทย สร้างแรงบันดาลใจให้คนรุ่นใหม่มากมาย",
    members: [
      { id: 301, name: "ตูน (อาทิวราห์ คงมาลัย)", role: "ร้องนำ", image: "/images/members/toon.jpg" },
      { id: 302, name: "ปิ๊ด (ธนชัย ตันตระกูล)", role: "เบส", image: "/images/members/pid.jpg" },
      { id: 303, name: "ชัช (สุชัฒติ จั่นอี๊ด)", role: "กลอง", image: "/images/members/chuch.jpg" },
      { id: 304, name: "ยอด (ธนดล ช้างเสวก)", role: "กีตาร์", image: "/images/members/yod.jpg" },
      { id: 305, name: "โอม (โอม เปล่งขำ)", role: "คีย์บอร์ด", image: "/images/members/ohm.jpg" },
    ],
  },
];