// src/components/Navbar.tsx
import Link from "next/link";
import { mockBands } from "@/data/bands";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link href="/" className="nav-logo">
          Favorite Bands
        </Link>
        <ul className="nav-menu">
          <li>
            <Link href="/">หน้าแรก (รวมทั้งหมด)</Link>
          </li>
          {mockBands.map((band) => (
            <li key={band.id}>
              <Link href={`/bands/${band.id}`}>{band.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}