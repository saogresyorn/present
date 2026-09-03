// src/types/band.ts
export type Member = {
  id: number;
  name: string;
  role: string;
  image?: string; // เพิ่มรูปภาพสมาชิก
};

export type Band = {
  id: number;
  name: string;
  genre: string;
  image: string;
  description?: string;
  members: Member[];
};