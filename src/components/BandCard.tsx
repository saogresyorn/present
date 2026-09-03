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
            maxHeight: "260px",
            objectFit: "contain",
            display: "block",
            margin: "0 auto",
          }}
        />
      </div>

      <div className="band-info">
        <h2>{band.name}</h2>
        <p className="genre">แนวเพลง: {band.genre}</p>
        {band.description && <p className="description">{band.description}</p>}
      </div>

      <div className="members-section">
        <h3>สมาชิกในวง:</h3>
        <div className="members-grid">
          {band.members.map((member) => (
            <div key={member.id} className="member-card">
              {member.image && (
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-image"
                />
              )}
              <p className="member-name">{member.name}</p>
              <p className="member-role">({member.role})</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}