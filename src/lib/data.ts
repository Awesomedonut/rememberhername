import { Memorial } from "@/types/memorial";
import memorialsData from "@/data/memorials.json";

export function getAllMemorials(): Memorial[] {
  return (memorialsData as Memorial[]).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getMemorialById(id: string): Memorial | undefined {
  return (memorialsData as Memorial[]).find((m) => m.id === id);
}

export function getMemorialsByType(type: string): Memorial[] {
  return getAllMemorials().filter((m) => m.type === type);
}

export const violenceTypeLabels: Record<string, string> = {
  femicide: "Femicide",
  "sexual-assault": "Sexual Assault",
  "domestic-violence": "Domestic Violence",
  trafficking: "Trafficking",
  "institutional-violence": "Institutional Violence",
  other: "Other",
};
