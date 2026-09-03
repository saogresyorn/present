import { mockBands } from "@/data/bands";
import BandCard from "@/components/BandCard";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function BandDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const band = mockBands.find((b) => b.id === Number(resolvedParams.id));

  if (!band) {
    return (
      <main className="container" style={{ textAlign: "center", padding: "40px" }}>
        <h2>ไม่พบข้อมูลวงดนตรีที่คุณต้องการ</h2>
        <br />
        <Link href="/" style={{ color: "#0070f3", textDecoration: "underline" }}>
          กลับหน้าหลัก
        </Link>
      </main>
    );
  }

  return (
    <main className="container">
      <BandCard band={band} />
    </main>
  );
}