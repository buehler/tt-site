import PlayerCarousel from '@/components/player_carousel';
import TitleHero from '@/components/title_hero';

export default function Home() {
  return (
    <main>
      <TitleHero />
      <div className="max-w-xl m-auto mt-12 mb-24 text-center">
        <h2 className="font-display text-3xl text-blue mb-4">The Teabag Titans</h2>
        <p className="text-lg mb-8">
          Welcome to the world of the Teabag Titans, an extraordinary e-sports team that combines the thrill of competitive
          gaming with a unique twist. With a name that reflects a bold and unapologetic spirit, Teabag Titans brings together
          a group of talented individuals who are not only passionate about gaming but also share a love for the finer things
          in life, including a good drink.
        </p>
        <p className="text-lg">
          Despite the unconventional approach, Teabag Titans is a force to be reckoned with in the e-sports arena. Our
          members possess exceptional gaming skills, strategic thinking, and an unwavering determination to conquer their
          opponents. We honed our abilities through countless hours of practice and have proven ourselves in various gaming
          tournaments.
        </p>
      </div>
      <div className="max-w-xl m-auto mt-12 text-center">
        <h2 className="font-display text-3xl text-blue mb-4">The Members</h2>
      </div>
      <div>
        <PlayerCarousel />
      </div>
    </main>
  );
}
