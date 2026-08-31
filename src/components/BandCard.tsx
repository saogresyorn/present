// src/components/BandCard.tsx
import type { Band } from "@/types/band";

type BandCardProps = {
  band: Band;
};

export default function BandCard({ band }: BandCardProps) {
  return (
    <article className="band-card">
      <div className="image-container">
        <img
          src={band.image}
          alt={band.name}
          style={{
            width: "100%",
            maxHeight: "260px",   // กำหนดความสูงสูงสุดไว้ไม่ให้ใหญ่เกิน
            objectFit: "contain", // แสดงรูปครบเต็มใบ ไม่โดนซูมหรือตัดหัว
            display: "block",
            margin: "0 auto",
          }}
        />
      </div>

      <h2>{band.name}</h2>
      <p className="genre">แนวเพลง: {band.genre}</p>

      {band.description && <p className="description">{band.description}</p>}

      <div className="members-section">
        <h3>สมาชิกในวง:</h3>
        <ul>
          {band.members.map((member) => (
            <li key={member.id}>
              {member.name} ({member.role})
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}