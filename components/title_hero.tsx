import Image from 'next/image';

export default function TitleHero() {
  return (
    <div className="w-full flex items-center justify-center ali bg-center bg-cover bg-[url('/header_hero.png')] h-[36rem]">
      <div className="text-center">
        <Image src="/logo_white.png" alt="Teabag Titans Logo" width={128} height={128} className="mb-8 inline-block" />
        <h1 className="font-display text-6xl">TEABAG TITANS</h1>
      </div>
    </div>
  );
}
