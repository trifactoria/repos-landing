'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#2D3239] text-white flex flex-col">
      {/* Hero Section */}
      <header className="mx-auto w-full max-w-3xl px-6 py-12 md:py-16">
        <div className="flex flex-col items-center text-center">
          {/* Logo banner */}
          <div className="w-full max-w-[620px] rounded-2xl bg-white p-4">
            <Image
              src="/logo.png"
              alt="RepOS"
              width={1400}
              height={420}
              priority
              className="h-auto w-full"
            />
          </div>

          {/* Tagline */}
          <h1 className="mt-10 text-lg md:text-xl lg:text-2xl font-normal mb-5 max-w-3xl leading-relaxed opacity-0 animate-fade-in animation-delay-100">
            A multi-panel, database-backed command environment
            <br className="hidden md:block" />
            <span className="text-[#8B9199]"> for developers who work in the terminal.</span>
          </h1>

          {/* Clarifier */}
          <p className="text-[#5DD3D3] text-sm md:text-base max-w-2xl leading-relaxed opacity-0 animate-fade-in animation-delay-200">
            <span className="text-[#F5C842] mr-2">▸</span>
            Store aliases, switch contexts, and reuse real commands — without shell sprawl.
          </p>
        </div>
      </header>

      {/* Divider */}
      <div className="mx-auto w-full max-w-3xl px-6">
        <div className="flex items-center gap-4 opacity-0 animate-fade-in animation-delay-300">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D63384]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#5DD3D3]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F5C842]" />
          </div>
          <div className="flex-1 h-px bg-[#3D4451]" />
        </div>
      </div>

      {/* What It Does Section */}
      <section className="mx-auto w-full max-w-3xl px-6 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[#D63384] text-base md:text-lg mb-7 flex items-center gap-3 font-medium opacity-0 animate-fade-in animation-delay-300">
            <span className="text-[#F5C842] font-normal">{'>'}</span>
            What It Does
          </h2>

          <div className="space-y-5 text-[#C8C8C8] opacity-0 animate-fade-in animation-delay-400">
            <p className="text-sm md:text-base leading-relaxed">
              RepOS is a CLI-first environment for managing your personal command workflows.
              Commands are organized by <span className="text-[#5DD3D3]">panel</span>{' '}
              <span className="text-[#8B9199]">(Git, Docker, Python, etc.)</span>, persisted locally,
              and replayable across sessions.
            </p>

            <p className="text-sm md:text-base leading-relaxed">
              RepOS is designed to be{' '}
              <span className="text-[#F5C842]">fast</span>,{' '}
              <span className="text-[#D63384]">local-first</span>, and{' '}
              <span className="text-[#5DD3D3]">transparent</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto w-full max-w-3xl px-6">
        <div className="flex items-center gap-4 opacity-0 animate-fade-in animation-delay-300">
          <div className="flex-1 h-px bg-[#3D4451]" />
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F5C842]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#D63384]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#5DD3D3]" />
          </div>
          <div className="flex-1 h-px bg-[#3D4451]" />
        </div>
      </div>

      {/* How It Works Section */}
      <section className="mx-auto w-full max-w-3xl px-6 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[#D63384] text-base md:text-lg mb-7 flex items-center gap-3 font-medium opacity-0 animate-fade-in animation-delay-300">
            <span className="text-[#F5C842] font-normal">{'>'}</span>
            How It Works
          </h2>

          <div className="mt-4">
            <p className="text-xs uppercase tracking-wider text-[#8B9199] text-center">
              Install &amp; run
            </p>

            <pre className="mt-3 overflow-x-auto rounded-xl border border-[#3D4451] bg-[#23272E] p-4 text-sm leading-relaxed">
              <code>
                <span className="text-[#8B9199]">$</span> pip install{' '}
                <span className="text-[#F5C842]">repos-cli</span>
                {'\n'}
                <span className="text-[#8B9199]">$</span>{' '}
                <span className="text-[#5DD3D3]">repos-cli</span>{' '}
                <span className="text-[#8B9199]"># global db</span>
                {'\n'}
                <span className="text-[#8B9199]">$</span>{' '}
                <span className="text-[#5DD3D3]">repos-cli init</span>{' '}
                <span className="text-[#8B9199]"># per-project db</span>
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto w-full max-w-3xl px-6">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-[#3D4451]" />
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5DD3D3]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F5C842]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#D63384]" />
          </div>
        </div>
      </div>

      {/* Get RepOS Section */}
      <section className="mx-auto w-full max-w-3xl px-6 py-12 md:py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[#D63384] text-base md:text-lg mb-9 flex items-center gap-3 font-medium">
            <span className="text-[#F5C842] font-normal">{'>'}</span>
            Get RepOS
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* GitHub Button */}
            <a
              href="https://github.com/trifactoria/repos-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-5 py-2.5 bg-[#3D4451] border border-[#5DD3D3]/60 hover:border-[#5DD3D3] hover:bg-[#5DD3D3] hover:text-[#2D3239] transition-all duration-200 text-[#5DD3D3] text-sm rounded-lg"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="font-medium">View on GitHub</span>
            </a>

            {/* PyPI Button */}
            <a
              href="https://pypi.org/project/repos-cli/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-5 py-2.5 bg-[#3D4451] border border-[#F5C842]/60 hover:border-[#F5C842] hover:bg-[#F5C842] hover:text-[#2D3239] transition-all duration-200 text-[#F5C842] text-sm rounded-lg"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.042 0l-.28.039-6.01 1.592L3.998 2.09v7.903l-2.004.533v8.06l6.263 1.66.282.04.276-.04 6.269-1.66V10.66l-2.009-.533 2.009-.533V2.09L13.27 1.63zm.558 2.343v5.67l-4.524 1.2V3.542zm-5.082.653v5.684L3.45 9.982V4.297zm4.524 6.893l4.068 1.079v5.683l-4.068 1.077zm-5.082.653l4.524 1.2v5.671l-4.524-1.2z" />
              </svg>
              <span className="font-medium">Install via PyPI</span>
            </a>
          </div>

          {/* Sponsor Link */}
          <div className="mt-7 text-center">
            <a
              href="https://github.com/sponsors/trifactoria/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#D63384]/80 hover:text-[#D63384] transition-colors text-xs"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              <span>Sponsor development</span>
            </a>
          </div>
        </div>
      </section>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Footer */}
      <footer className="border-t border-[#3D4451]">
        <div className="mx-auto w-full max-w-3xl px-6 py-6">
          <p className="text-center text-xs text-[#8B9199]">
            RepOS is a product of{' '}
            <a
              href="https://www.skillkraftz.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D63384] hover:text-[#D63384]/80 transition-colors"
            >
              SkillKraftz LLC
            </a>
            . Developed within the{' '}
            <a
              href="https://www.trifactoria.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#5DD3D3] hover:text-[#5DD3D3]/80 transition-colors"
            >
              TriFactoria Labs
            </a>{' '}
            studio.
          </p>
        </div>
      </footer>
    </div>
  );
}
