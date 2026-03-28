import Link from "next/link";
import { Memorial } from "@/types/memorial";
import { violenceTypeLabels } from "@/lib/data";

export default function MemorialCard({ memorial }: { memorial: Memorial }) {
  const date = new Date(memorial.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link href={`/${memorial.id}`} className="group block">
      <article className="rounded-lg border border-zinc-200 p-6 transition-colors group-hover:border-zinc-400 group-hover:bg-zinc-50 dark:border-zinc-800 dark:group-hover:border-zinc-600 dark:group-hover:bg-zinc-900">
        <div className="mb-2 flex items-baseline justify-between gap-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            {memorial.name}
          </h2>
          {memorial.age && (
            <span className="shrink-0 text-sm text-zinc-500">
              Age {memorial.age}
            </span>
          )}
        </div>
        <div className="mb-3 flex flex-wrap gap-2 text-sm text-zinc-500 dark:text-zinc-400">
          <span>{memorial.location}, {memorial.country}</span>
          <span aria-hidden>·</span>
          <span>{date}</span>
          <span aria-hidden>·</span>
          <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
            {violenceTypeLabels[memorial.type] || memorial.type}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {memorial.summary}
        </p>
      </article>
    </Link>
  );
}
