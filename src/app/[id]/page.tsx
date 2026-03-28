import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllMemorials, getMemorialById, violenceTypeLabels } from "@/lib/data";

export function generateStaticParams() {
  return getAllMemorials().map((m) => ({ id: m.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const memorial = getMemorialById(id);
  if (!memorial) return { title: "Not Found" };
  return {
    title: `${memorial.name} — Remember Her Name`,
    description: memorial.summary,
  };
}

export default async function MemorialPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const memorial = getMemorialById(id);

  if (!memorial) notFound();

  const date = new Date(memorial.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-3xl px-6 pt-8 pb-12">
          <Link
            href="/"
            className="inline-block text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-200"
          >
            &larr; Back
          </Link>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {memorial.name}
          </h1>
          <div className="mt-3 flex flex-wrap gap-2 text-sm text-zinc-500 dark:text-zinc-400">
            {memorial.age && <span>Age {memorial.age}</span>}
            {memorial.age && <span aria-hidden>·</span>}
            <span>{memorial.location}, {memorial.country}</span>
            <span aria-hidden>·</span>
            <span>{date}</span>
            <span aria-hidden>·</span>
            <span className="rounded-full bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
              {violenceTypeLabels[memorial.type] || memorial.type}
            </span>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
        <p className="mb-8 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          {memorial.summary}
        </p>

        {memorial.story && (
          <div className="prose prose-zinc max-w-none dark:prose-invert">
            {memorial.story.split("\n\n").map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        )}

        {memorial.source && (
          <div className="mt-12 border-t border-zinc-200 pt-6 dark:border-zinc-800">
            <a
              href={memorial.source}
              className="text-sm text-zinc-500 underline hover:text-zinc-900 dark:hover:text-zinc-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source
            </a>
          </div>
        )}
      </main>

      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-3xl px-6 py-8 text-center text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
          <p>
            If you or someone you know is experiencing violence, contact the{" "}
            <a
              href="https://www.thehotline.org/"
              className="underline hover:text-zinc-900 dark:hover:text-zinc-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              National Domestic Violence Hotline
            </a>{" "}
            at 1-800-799-7233.
          </p>
          <p className="mt-6">
            This page is a personal memorial. All information is sourced from
            credible, publicly available news reports and fact-checked to the
            best of my ability. If you are a family member or close friend and
            would like to request a correction, an update, or the removal of a
            memorial, please reach out. I will honor all good-faith requests.
          </p>
        </div>
      </footer>
    </div>
  );
}
