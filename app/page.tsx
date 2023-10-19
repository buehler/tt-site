import TitleHero from '@/components/title_hero';

export default function Home() {
  return (
    <main>
      <TitleHero />
      <div className="max-w-lg m-auto mt-12 text-center">
        <h2 className="font-display text-2xl text-blue mb-4">The Teabag Titans</h2>
        <p>
          Welcome to the world of Teabag Titans, an extraordinary e-sports team that combines the thrill of competitive
          gaming with a unique twist. With a name that reflects their bold and unapologetic spirit, Teabag Titans brings
          together a group of talented individuals who are not only passionate about gaming but also share a love for the
          finer things in life, including a good drink.
        </p>
      </div>
    </main>
  );
}
