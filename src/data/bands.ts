import type { Band } from "@/types/band";

export const mockBands: Band[] = [
  {
    id: 1,
    name: "Loso (โลโซ)",
    genre: "Rock / Pop Rock",
    image: "/images/bands/loso.jpg",
    description: "วงร็อกระดับตำนานของไทย นำโดย เสก โลโซ เจ้าของเพลงฮิตยุค 90s มากมาย",
    members: [
      { id: 101, name: "เสก (เสกสรรค์ ศุขพิมาย)", role: "ร้องนำ / กีตาร์" },
      { id: 102, name: "ใหญ่ (กิตติศักดิ์ โคตรคำ)", role: "กลอง" },
      { id: 103, name: "รัฐ (อภิรัฐ สุขจิตร์)", role: "เบส" },
    ],
  },
  {
    id: 2,
    name: "Inca (อินคา)",
    genre: "Pop Rock / Country Rock",
    image: "/images/bands/inca.jpg",
    description: "วงดนตรีระดับตำนานยุค 90s เจ้าของเพลงฮิตตลอดกาลอย่าง 'หมากเกมนี้' และ 'ขอเริ่มใหม่'",
    members: [
      { id: 201, name: "ดาษ (ศักดา พัทธสีมา)", role: "ร้องนำ / กีตาร์" },
      { id: 202, name: "เต๋อ (จารุวัฒน์ วิเศษสมบัติ)", role: "ร้องนำ / กีตาร์" },
      { id: 203, name: "อ้อม (จีรศักดิ์ ปานพุ่ม)", role: "กีตาร์" },
      { id: 204, name: "บอย (วรวิทย์ พิกุลทอง)", role: "คีย์บอร์ด" },
    ],
  },
  {
    id: 3,
    name: "Bodyslam (บอดี้สแลม)",
    genre: "Rock / Alternative Rock",
    image: "/images/bands/bodyslam.jpg",
    description: "วงร็อกระดับแนวหน้าของเมืองไทย สร้างแรงบันดาลใจให้คนรุ่นใหม่มากมาย",
    members: [
      { id: 301, name: "ตูน (อาทิวราห์ คงมาลัย)", role: "ร้องนำ" },
      { id: 302, name: "ปิ๊ด (ธนชัย ตันตระกูล)", role: "เบส" },
      { id: 303, name: "ชัช (สุชัฒติ จั่นอี๊ด)", role: "กลอง" },
      { id: 304, name: "ยอด (ธนดล ช้างเสวก)", role: "กีตาร์" },
      { id: 305, name: "โอม (โอม เปล่งขำ)", role: "คีย์บอร์ด" },
    ],
  },
];