import { getAllMemorials } from "@/lib/data";
import MemorialCard from "@/components/MemorialCard";

export default function Home() {
  const memorials = getAllMemorials();

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Remember Her Name
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            A memorial for the women and girls lost to violence.
            <br />
            Their names deserve to be remembered. Their stories deserve to be told.
          </p>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-10">
        <div className="mb-8 text-sm text-zinc-500 dark:text-zinc-400">
          {memorials.length} {memorials.length === 1 ? "life" : "lives"} remembered
        </div>
        <div className="flex flex-col gap-4">
          {memorials.map((memorial) => (
            <MemorialCard key={memorial.id} memorial={memorial} />
          ))}
        </div>
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
          <p className="mt-6 font-medium text-zinc-700 dark:text-zinc-300">
            This site is currently under construction.
          </p>
          <p className="mt-4">
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
