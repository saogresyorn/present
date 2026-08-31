// src/app/page.tsx
import BandCard from "@/components/BandCard";
import { mockBands } from "@/data/bands";

export default function HomePage() {
  return (
    <main className="container">
      <h1 className="title">วงดนตรีที่ชื่นชอบ (Favorite Bands)</h1>
      <section className="band-grid">
        {mockBands.map((band) => (
          <BandCard key={band.id} band={band} />
        ))}
      </section>
    </main>
  );
}