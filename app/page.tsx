import Image from 'next/image';
import type { ReactNode } from 'react';
import { TrackedLink } from './tracked-link';

const features = [
  {
    title: 'Command Panels',
    text: 'Group the commands you reach for by working context.',
    color: 'text-[#5DD3D3]',
    icon: <PanelsIcon />,
  },
  {
    title: 'Reusable Aliases',
    text: 'Keep familiar shortcuts close without expanding shell sprawl.',
    color: 'text-[#F5C842]',
    icon: <CodeIcon />,
  },
  {
    title: 'Saved Workflows',
    text: 'Bring useful command sets back across terminal sessions.',
    color: 'text-[#D63384]',
    icon: <CloudIcon />,
  },
  {
    title: 'Global Or Project Scope',
    text: 'Use RepOS broadly, or keep a workflow tied to one repo.',
    color: 'text-[#5DD3D3]',
    icon: <GlobeIcon />,
  },
];

const architecture = [
  {
    title: 'CLI Native',
    text: 'A Python CLI that stays in the flow of terminal work.',
    color: 'text-[#5DD3D3]',
    icon: <TerminalIcon />,
  },
  {
    title: 'Panel Based',
    text: 'Related commands stay grouped, scannable, and ready to run.',
    color: 'text-[#F5C842]',
    icon: <LayoutIcon />,
  },
  {
    title: 'Persistent',
    text: 'Useful workflows survive beyond scrollback and shell history.',
    color: 'text-[#D63384]',
    icon: <DatabaseIcon />,
  },
];

const roadmap = [
  'Sharper panel navigation for larger command sets.',
  'Smoother handoff between global and project scopes.',
  'Faster setup for common developer stacks.',
  'Better command discovery without hiding the terminal.',
];

function SectionHeading({ children, color = 'text-[#D63384]' }: { children: ReactNode; color?: string }) {
  return (
    <h2 className={`mb-5 flex items-center gap-3 text-base font-semibold md:text-lg ${color}`}>
      <span className="font-normal text-[#F5C842]">{'>'}</span>
      {children}
    </h2>
  );
}

function TerminalBlock({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <pre
      className={`overflow-x-auto rounded-lg border border-[#3D4451] bg-[#141A21]/80 p-4 text-sm leading-relaxed text-[#E8E8E8] shadow-[0_16px_48px_rgba(0,0,0,0.22)] ${className}`}
    >
      <code>{children}</code>
    </pre>
  );
}

function SectionSeparator({ align = 'left' }: { align?: 'left' | 'center' | 'right' }) {
  return (
    <div className="mx-auto w-full max-w-5xl px-6">
      <div className="flex items-center gap-4">
        {align !== 'left' && <div className="h-px flex-1 bg-[#3D4451]" />}
        <div className="flex gap-1.5" aria-hidden="true">
          {align === 'center' ? (
            <>
              <span className="h-2.5 w-2.5 rounded-full bg-[#F5C842]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#D63384]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#5DD3D3]" />
            </>
          ) : align === 'right' ? (
            <>
              <span className="h-2.5 w-2.5 rounded-full bg-[#5DD3D3]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#F5C842]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#D63384]" />
            </>
          ) : (
            <>
              <span className="h-2.5 w-2.5 rounded-full bg-[#D63384]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#5DD3D3]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#F5C842]" />
            </>
          )}
        </div>
        {align !== 'right' && <div className="h-px flex-1 bg-[#3D4451]" />}
      </div>
    </div>
  );
}

function IconFrame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mb-4 h-8 w-8 ${className}`}>{children}</div>;
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function PanelsIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <rect x="6" y="8" width="12" height="10" rx="1.5" />
      <rect x="22" y="8" width="12" height="10" rx="1.5" />
      <rect x="6" y="22" width="12" height="10" rx="1.5" />
      <rect x="22" y="22" width="12" height="10" rx="1.5" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 10 8 20l8 10" />
      <path d="M24 10 32 20 24 30" />
      <path d="m22 7-4 26" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 29h16a7 7 0 0 0 .5-14A10 10 0 0 0 10 17a6 6 0 0 0 3 12Z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="20" cy="20" r="14" />
      <path d="M6 20h28" />
      <path d="M20 6c4 4 6 8.5 6 14s-2 10-6 14c-4-4-6-8.5-6-14s2-10 6-14Z" />
    </svg>
  );
}

function TerminalIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="7" y="9" width="26" height="22" rx="2" />
      <path d="m13 17 5 4-5 4" />
      <path d="M21 25h7" />
    </svg>
  );
}

function LayoutIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="7" y="9" width="26" height="22" rx="2" />
      <path d="M7 17h26" />
      <path d="M17 17v14" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="20" cy="11" rx="11" ry="4" />
      <path d="M9 11v18c0 2.2 4.9 4 11 4s11-1.8 11-4V11" />
      <path d="M9 20c0 2.2 4.9 4 11 4s11-1.8 11-4" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 15 16 6l11 9" />
      <path d="M8 14v12h16V14" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 20c5-2 8-7 8-14-7 0-12 3-14 8L6 20l6-1 1 6 5-5Z" />
      <path d="M19 9h.01" />
      <path d="M8 23l-3 3" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#2D3239] text-[#E8E8E8]">
      <header className="mx-auto w-full max-w-5xl px-5 pb-8 pt-5 sm:px-6 sm:pb-10 sm:pt-6 md:pb-12">
        <nav className="mb-6 flex items-center justify-between gap-4 text-xs text-[#E8E8E8] sm:mb-7">
          <TrackedLink
            href="#top"
            analyticsEvent="click_nav_repos_cli"
            analyticsLocation="nav"
            className="text-[#5DD3D3] hover:text-[#E8E8E8]"
          >
            repos-cli
          </TrackedLink>
          <div className="flex items-center gap-4 sm:gap-5 md:gap-8">
            <TrackedLink
              href="#workflow"
              analyticsEvent="click_nav_workflow"
              analyticsLocation="nav"
              className="hover:text-[#5DD3D3]"
            >
              workflow
            </TrackedLink>
            <TrackedLink
              href="#architecture"
              analyticsEvent="click_nav_architecture"
              analyticsLocation="nav"
              className="hover:text-[#5DD3D3]"
            >
              architecture
            </TrackedLink>
            <TrackedLink
              href="#get"
              analyticsEvent="click_nav_install"
              analyticsLocation="nav"
              className="hover:text-[#5DD3D3]"
            >
              install
            </TrackedLink>
          </div>
        </nav>

        <div id="top">
          <div className="mb-5 inline-flex items-center gap-2 rounded-lg border border-[#3D4451] bg-[#141A21]/70 px-3 py-2 text-xs text-[#E8E8E8] shadow-[0_12px_36px_rgba(0,0,0,0.18)] sm:mb-6">
            <span className="h-2.5 w-2.5 rounded-full bg-[#D63384]" />
            <span>Python package for terminal workflows</span>
          </div>

          <div className="mx-auto mb-6 max-w-[22rem] rounded-xl bg-white p-3 shadow-[0_22px_80px_rgba(0,0,0,0.32)] sm:mb-8 sm:max-w-none sm:p-4 md:p-7">
            <Image src="/logo.png" alt="RepOS" width={814} height={276} priority className="mx-auto h-auto w-full max-w-3xl" />
          </div>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
            <div className="w-full">
              <h1 className="w-full max-w-none text-2xl font-normal leading-[1.45] sm:text-3xl sm:leading-[1.55] md:text-[2.45rem] lg:max-w-md">
                A cleaner command center for developers who live in the{' '}
                <span className="text-[#D63384]">terminal.</span>
              </h1>

              <p className="mt-4 w-full max-w-none text-sm leading-7 text-[#C8C8C8] sm:mt-5 lg:max-w-md">
                Organize repeatable commands, save aliases, and switch contexts without turning
                dotfiles into a command database.
              </p>

              <div className="mt-7 flex w-full flex-col gap-3 min-[430px]:flex-row min-[430px]:items-center min-[430px]:justify-center sm:mt-9 sm:gap-4 lg:w-auto lg:justify-start">
                <TrackedLink
                  href="https://pypi.org/project/repos-cli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  analyticsEvent="click_install_repos_cli"
                  analyticsLocation="hero"
                  className="inline-flex h-12 w-full items-center justify-center whitespace-nowrap rounded-lg border border-[#F5C842]/80 bg-[#F5C842] px-5 text-sm font-semibold text-[#2D3239] shadow-[0_12px_34px_rgba(245,200,66,0.16)] hover:border-[#F5C842] hover:bg-[#f7d45f] min-[430px]:flex-1 sm:w-[13.25rem] sm:flex-none"
                >
                  <span className="mr-2 text-[#2D3239]/75">{'>'}</span>
                  pip install repos-cli
                </TrackedLink>
                <TrackedLink
                  href="https://github.com/trifactoria/repos-cli"
                  target="_blank"
                  rel="noopener noreferrer"
                  analyticsEvent="click_view_source"
                  analyticsLocation="hero"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-[#5DD3D3]/70 bg-[#141A21]/70 px-5 text-sm font-semibold text-[#5DD3D3] hover:bg-[#5DD3D3] hover:text-[#2D3239] min-[430px]:flex-1 sm:w-[10.75rem] sm:flex-none"
                >
                  <GitHubIcon />
                  View source
                </TrackedLink>
              </div>
            </div>

            <div className="w-full rounded-xl border border-[#64707f]/70 bg-[#10161D]/85 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
              <div className="flex items-center gap-2 border-b border-[#3D4451] px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#D63384]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#F5C842]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#5DD3D3]" />
                <span className="ml-2 text-xs text-[#C8C8C8]">repos-cli terminal</span>
              </div>
              <Image
                src="/screenshots/repos-cli-terminal.png"
                alt="RepOS terminal interface showing panels and command workflow organization"
                width={1246}
                height={1007}
                priority
                className="mt-2 h-auto w-full rounded"
              />
            </div>
          </div>
        </div>
      </header>

      <SectionSeparator />

      <section className="mx-auto w-full max-w-5xl px-6 py-8 md:py-10">
        <SectionHeading>What RepOS Gives You</SectionHeading>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-lg border border-[#3D4451] bg-[#141A21]/62 p-5 shadow-[0_18px_46px_rgba(0,0,0,0.18)]"
            >
              <IconFrame className={feature.color}>{feature.icon}</IconFrame>
              <h3 className={`text-sm font-semibold ${feature.color}`}>{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#C8C8C8]">{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <SectionSeparator align="center" />

      <section className="mx-auto w-full max-w-5xl px-6 py-8 md:py-10">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div id="workflow">
            <SectionHeading>Start A Workflow</SectionHeading>
            <p className="max-w-sm text-sm leading-7 text-[#C8C8C8]">
              Install the CLI, open RepOS, and choose whether the command set belongs everywhere or
              only inside the current project.
            </p>
          </div>

          <TerminalBlock className="self-center">
            <span className="text-[#8B9199]">$</span> pip install <span className="text-[#F5C842]">repos-cli</span>
            {'\n'}
            <span className="text-[#8B9199]">$</span> <span className="text-[#5DD3D3]">repos-cli</span>{' '}
            <span className="text-[#8B9199]"># global workspace</span>
            {'\n'}
            <span className="text-[#8B9199]">$</span> <span className="text-[#5DD3D3]">repos-cli init</span>{' '}
            <span className="text-[#8B9199]"># project workspace</span>
          </TerminalBlock>
        </div>
      </section>

      <SectionSeparator align="right" />

      <section id="architecture" className="mx-auto w-full max-w-5xl px-6 py-8 md:py-10">
        <SectionHeading>Built For Terminal Work</SectionHeading>
        <div className="grid gap-6 md:grid-cols-3">
          {architecture.map((item) => (
            <article key={item.title}>
              <IconFrame className={item.color}>{item.icon}</IconFrame>
              <h3 className={`text-sm font-semibold ${item.color}`}>{item.title}</h3>
              <p className="mt-3 max-w-[13rem] text-xs leading-6 text-[#C8C8C8]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <SectionSeparator align="center" />

      <section className="mx-auto w-full max-w-5xl px-6 py-8 md:py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <article className="border-r-0 border-[#3D4451] lg:border-r lg:pr-8">
            <div className="mb-3 flex items-center gap-3 text-[#5DD3D3] [&>svg]:h-7 [&>svg]:w-7">
              <HomeIcon />
              <h2 className="text-base font-semibold md:text-lg">Local-First By Default</h2>
            </div>
            <div className="grid gap-4 text-sm leading-7 text-[#C8C8C8]">
              <p>Your command workflow stays close to the machine and project where you use it.</p>
              <p>RepOS is designed around explicit scopes, visible commands, and terminal-native habits.</p>
            </div>
          </article>

          <article className="border-r-0 border-[#3D4451] lg:border-r lg:pr-8">
            <div className="mb-3 flex items-center gap-3 text-[#F5C842]">
              <span className="text-2xl leading-none">{'{}'}</span>
              <h2 className="text-base font-semibold md:text-lg">Why Not Just Aliases?</h2>
            </div>
            <div className="grid gap-4 text-sm leading-7 text-[#C8C8C8]">
              <p>Aliases are great until they spread across profiles, snippets, and project notes.</p>
              <p>RepOS gives them a focused home with context, structure, and recall.</p>
            </div>
          </article>

          <article>
            <div className="mb-3 flex items-center gap-3 text-[#D63384] [&>svg]:h-7 [&>svg]:w-7">
              <RocketIcon />
              <h2 className="text-base font-semibold md:text-lg">Product Direction</h2>
            </div>
            <ul className="grid gap-2 text-sm leading-6 text-[#C8C8C8]">
              {roadmap.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D63384]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <SectionSeparator />

      <section id="get" className="mx-auto w-full max-w-5xl px-6 py-8 md:py-10">
        <h2 className="mb-5 text-center text-xl font-semibold text-[#D63384] md:text-2xl">
          <span className="text-[#F5C842]">{'>'}</span> Get RepOS
        </h2>
        <div className="grid gap-4 lg:grid-cols-[1fr_12rem_12rem] lg:items-center">
          <TerminalBlock className="min-h-14">
            <span className="text-[#8B9199]">$</span> pip install <span className="text-[#F5C842]">repos-cli</span>
          </TerminalBlock>
          <TrackedLink
            href="https://github.com/trifactoria/repos-cli"
            target="_blank"
            rel="noopener noreferrer"
            analyticsEvent="click_github"
            analyticsLocation="bottom_cta"
            className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-lg border border-[#5DD3D3]/70 bg-[#141A21]/70 px-5 text-sm font-semibold text-[#5DD3D3] hover:bg-[#5DD3D3] hover:text-[#2D3239]"
          >
            <GitHubIcon />
            View on GitHub
          </TrackedLink>
          <TrackedLink
            href="https://pypi.org/project/repos-cli/"
            target="_blank"
            rel="noopener noreferrer"
            analyticsEvent="click_pypi"
            analyticsLocation="bottom_cta"
            className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-lg border border-[#F5C842]/70 bg-[#141A21]/70 px-5 text-sm font-semibold text-[#F5C842] hover:bg-[#F5C842] hover:text-[#2D3239]"
          >
            <span aria-hidden="true">{'&'}</span>
            PyPI package
          </TrackedLink>
        </div>

        <div className="mt-8 text-center">
          <TrackedLink
            href="https://github.com/sponsors/trifactoria/"
            target="_blank"
            rel="noopener noreferrer"
            analyticsEvent="click_sponsor"
            analyticsLocation="footer"
            className="inline-flex items-center gap-2 text-xs text-[#D63384] hover:text-[#E8E8E8]"
          >
            <span aria-hidden="true">&lt;3</span>
            Sponsor development
          </TrackedLink>
        </div>
      </section>

      <footer className="border-t border-[#3D4451]">
        <div className="mx-auto w-full max-w-5xl px-6 py-6">
          <p className="text-center text-xs leading-6 text-[#8B9199]">
            RepOS is a product of{' '}
            <TrackedLink
              href="https://www.skillkraftz.com"
              target="_blank"
              rel="noopener noreferrer"
              analyticsEvent="click_skillkraftz"
              analyticsLocation="footer"
              className="text-[#D63384] hover:text-[#E8E8E8]"
            >
              SkillKraftz LLC
            </TrackedLink>
            . Developed within the{' '}
            <TrackedLink
              href="https://www.trifactoria.com"
              target="_blank"
              rel="noopener noreferrer"
              analyticsEvent="click_trifactoria"
              analyticsLocation="footer"
              className="text-[#5DD3D3] hover:text-[#E8E8E8]"
            >
              TriFactoria Labs
            </TrackedLink>{' '}
            studio.
          </p>
        </div>
      </footer>
    </main>
  );
}
