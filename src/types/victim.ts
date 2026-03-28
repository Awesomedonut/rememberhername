export type ViolenceType =
  | "femicide"
  | "sexual-assault"
  | "domestic-violence"
  | "trafficking"
  | "institutional-violence"
  | "other";

export interface Victim {
  id: string;
  name: string;
  age?: number;
  location: string;
  country: string;
  date: string;
  type: ViolenceType;
  summary: string;
  story?: string;
  source?: string;
  imageUrl?: string;
}
