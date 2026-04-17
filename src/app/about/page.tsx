import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — Your Friendly Developer',
  description: 'The real story behind 524 Tracker. Built by Jason Ramirez, a self-taught developer and CADC-II counselor from Prunedale, California.',
  robots: { index: true, follow: true, 'max-snippet': -1 },
  alternates: { canonical: 'https://524tracker.com/about' },
  openGraph: {
    title: 'About — Your Friendly Developer',
    description: 'The real story behind 524 Tracker. Built by Jason Ramirez, a self-taught developer and CADC-II counselor from Prunedale, California.',
    url: 'https://524tracker.com/about',
    type: 'website',
  },
};

export default function AboutPage() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jason Ramirez',
    jobTitle: 'Web Developer, CADC-II Counselor',
    worksFor: {
      '@type': 'Organization',
      name: 'Your Friendly Developer LLC',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Prunedale',
      addressRegion: 'California',
    },
    url: 'https://524tracker.com/about',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="font-display font-bold text-3xl text-brand-navy dark:text-white mb-6">
          About Your Friendly Developer
        </h1>

        <div className="space-y-5 text-sm text-text-primary leading-relaxed">
          <p>Hi. I&rsquo;m Jason Ramirez. This is why I built this.</p>

          <p>
            I&rsquo;m not going to pretend this started with a vision board or a business plan. It
            started in a storage shed in Salinas in 2013, when I was thirty-seven years old with
            nothing to my name and nowhere to be.
          </p>

          <p>
            I&rsquo;d been homeless for two years. Living out of my truck, sleeping in a shed behind
            my son&rsquo;s grandmother&rsquo;s house. The last two years of my drinking and using
            looked like that. On September 27th, 2013, I got sober. Got a bed in a treatment
            facility. That&rsquo;s where my life actually started.
          </p>

          <p>
            What nobody tells you about early recovery is how broke it is. Not just financially
            broke, though that too. Broke in every way. No credit. No savings. No plan. No idea
            what retirement even meant for someone like me. I was going to work until I died. That
            was the whole plan.
          </p>

          <p>Then I got my first laptop.</p>

          <p>
            I&rsquo;d been working at the treatment center where I got sober. Went from client to
            overnight staff when my old counselor, who had become the director, offered me the job.
            He saw something in me I couldn&rsquo;t see yet. I walked through that door feeling like
            a complete fraud. I walked through it anyway.
          </p>

          <p>
            On my days off I started trying to figure out how to make money online. I tried probably
            a hundred different things over the next thirteen years. None of them worked. Not because
            the ideas were bad, because I&rsquo;m an addict, and addicts chase shiny objects.
            I&rsquo;d start something, get excited about something else, abandon the first thing,
            chase the new thing. Repeat. For over a decade.
          </p>

          <p>
            What finally changed it wasn&rsquo;t willpower. It was everything I&rsquo;d learned in
            recovery, and in the mental health field working with clients, and fixing my own credit
            from scratch without anyone&rsquo;s help, and figuring out the tax system after years of
            not filing, and slowly, painfully, teaching myself SEO, then content strategy, then AI
            and LLM optimization, then UI design that actual humans enjoy using.
          </p>

          <p>
            Thirteen years of self-education. Every skill on these sites I learned the hard way
            because I had to.
          </p>

          <p>
            I built these tools because people like me needed them and couldn&rsquo;t afford them.
            People who are starting over. People who are broke and scared and trying to figure out a
            system that was never explained to them. People who need real information without the
            paywall, without the condescension, without the assumption that they already know what
            they&rsquo;re doing.
          </p>

          <p>
            I still work a full-time job. I&rsquo;m pursuing my Bachelor of Social Work with plans
            for my MSW. I take photos. And when I get home or get done with school work, I come
            here. This is the other thing that turns me on and settles me down at the same time.
            There&rsquo;s something about building something useful that hits different when you
            spent years building nothing.
          </p>

          <p>
            Your Friendly Developer is my LLC. I am the developer. This is my work.
          </p>

          <p>
            If you&rsquo;re looking for the guy behind these sites, it&rsquo;s me. A CADC-II
            counselor, a self-taught web builder, a recovering addict with over twelve years of
            sobriety, a guy who fixed his own credit and figured out his own taxes and is still
            figuring out everything else one day at a time.
          </p>

          <p>
            I&rsquo;m not a corporation. I&rsquo;m not a content farm. I&rsquo;m one person who
            lived a lot of the things these tools are about.
          </p>

          <p>That&rsquo;s why I built them.</p>
        </div>

        <h2 className="font-display font-bold text-xl text-brand-navy dark:text-white mt-12 mb-4">
          About 524 Tracker
        </h2>

        <div className="space-y-5 text-sm text-text-primary leading-relaxed">
          <p>
            When I got sober in 2013 I had no credit. Not bad credit. No credit. I spent the next
            several years rebuilding it from scratch &mdash; self-taught, no financial advisor, just
            research and trial and error and a lot of patience. I learned the hard way how bank
            rules work, how credit card issuers think, and how to navigate a system that
            isn&rsquo;t designed to be transparent.
          </p>

          <p>
            I built 524 Tracker because I wished it had existed when I was starting over. The Chase
            5/24 rule, the Amex lifetime bonus rules, the Citi timing windows &mdash; none of this
            is secret, but it&rsquo;s scattered across forums and subreddits and outdated blog
            posts. This puts it in one place.
          </p>

          <p>
            Everything here is for informational purposes only. Always verify rules directly with
            the card issuer before you apply. This is not financial advice.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-sm text-text-secondary">
          <p>Jason Ramirez</p>
          <p>Your Friendly Developer LLC</p>
          <p>Prunedale, California</p>
        </div>
      </article>
    </>
  );
}
