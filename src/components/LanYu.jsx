import React from 'react';
import { Link } from 'react-router-dom';

function LanYu() {
  return (
    <article className="flex overflow-hidden justify-center items-start pb-16 w-full bg-white max-md:pb-24">
      <div className="flex flex-col w-full max-w-[1080px] px-8 max-md:px-4">
        {/* Article Header */}
        <header className="flex flex-col w-full mb-12">
          <Link to="/editorial" className="text-sm text-neutral-600 hover:text-red-600 transition-colors mb-4 inline-block">
            ← Back to Expert Commentary
          </Link>
          <div className="font-bitmap-song flex flex-col w-full font-medium">
            <h1 className="font-display-04 md:font-display-02 font-bitmap-song leading-tight mb-4">
              Lan Yu
            </h1>
            <div className="font-display-04 md:font-display-02 font-bitmap-song leading-tight text-red-600 mb-6">
              梦话
            </div>
          </div>
          <div className="text-lg text-neutral-600 italic mb-8">
            A shadow journalist with years of on-the-ground reporting experience in China and the SOPA Awards recognition.
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="font-header-03 mt-12 mb-6">Is internet censorship solely a China problem?</h2>
          <p className="leading-9 mb-8">
            Recent legal challenges against Google in the U.S. highlight a broader issue: while state-driven censorship is prevalent, corporate censorship also poses real threats.
          </p>

          <p className="leading-9 mb-6">
            The narrative around internet censorship often centers on authoritarian regimes, with China's Great Firewall serving as the primary example. However, this framing obscures a more complex reality where censorship manifests in various forms across different political systems.
          </p>

          <p className="leading-9 mb-6">
            In my years of reporting from within China, I've witnessed firsthand how state censorship operates—not just through technical barriers, but through self-censorship, economic pressure, and social conditioning. Yet recent developments in democratic societies reveal that censorship isn't confined to authoritarian states.
          </p>

          <h2 className="font-header-03 mt-12 mb-6">The Corporate Censorship Challenge</h2>

          <p className="leading-9 mb-6">
            Major technology platforms increasingly act as gatekeepers of information, making editorial decisions that affect billions of users worldwide. These decisions, while framed as content moderation, often reflect corporate interests, advertiser pressures, and political considerations rather than objective standards.
          </p>

          <p className="leading-9 mb-6">
            The difference lies not in the method, but in the motivation and transparency. State censorship is often explicit about its political goals, while corporate censorship operates under the guise of community standards and terms of service.
          </p>

          <h2 className="font-header-03 mt-12 mb-6">Cultural Context and Information Shaping</h2>

          <p className="leading-9 mb-6">
            Having experienced both systems, I observe how information control shapes cultural phenomena differently. In China, censorship creates alternative vocabularies, coded language, and underground information networks. In Western contexts, algorithmic curation and platform policies create information bubbles that are equally effective at limiting discourse.
          </p>

          <p className="leading-9 mb-6">
            The tools may differ—keyword filtering versus algorithmic suppression, direct blocking versus shadow banning—but the impact on public discourse remains significant in both contexts.
          </p>

          <h2 className="font-header-03 mt-12 mb-6">Beyond East and West</h2>

          <p className="leading-9 mb-6">
            The binary of "free" versus "censored" internet oversimplifies a spectrum of information control. Every society negotiates the boundaries of acceptable discourse, whether through legal frameworks, social pressure, or market forces.
          </p>

          <p className="leading-9 mb-6">
            Understanding censorship as a global phenomenon—rather than a problem confined to specific political systems—opens space for more nuanced discussions about information freedom, platform governance, and the future of digital communication.
          </p>

          <p className="leading-9 mb-6">
            As we navigate an increasingly connected world, the challenge isn't simply to eliminate censorship, but to develop transparent, accountable systems for managing information that serve public interests rather than narrow political or corporate agendas.
          </p>

          <div className="mt-16 pt-8 border-t border-neutral-200">
            <p className="text-sm text-neutral-600 italic">
              Lan Yu (梦话) is a pseudonym for a journalist who has spent years reporting on technology, politics, and society from within China. Their work has been recognized by the Society of Professional Journalists and has appeared in various international publications.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default LanYu;