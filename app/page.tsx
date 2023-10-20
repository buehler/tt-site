'use client';

import Divider from '@/components/divider';
import PlayerCarousel from '@/components/player_carousel';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Scroll } from 'scrollex';

const Title = () => (
  <Scroll.Section className="h-screen relative flex flex-col align-middle justify-center items-center mb-16">
    <div className="absolute inset-0 z-0">
      <Image src={'/home/top.png'} fill={true} alt={'top'} fetchPriority="high" className="object-cover object-bottom" />
    </div>
    <Scroll.Item
      keyframes={({ section }) => ({
        0: {
          translateX: 0,
          opacity: 1,
        },
        [section.bottomAt('container-top') / 3]: {
          translateX: section.width / 4,
          opacity: 0,
        },
      })}
    >
      <motion.div
        initial={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center relative z-20 inline-block"
      >
        <h2 className="font-display text-xl tracking-widest text-gold">TEABAG</h2>
        <h2 className="font-display text-7xl mb-16 tracking-widest">TITANS</h2>
      </motion.div>
    </Scroll.Item>
    <Scroll.Item
      keyframes={({ section }) => ({
        0: {
          translateX: 0,
          opacity: 1,
        },
        [section.bottomAt('container-top') / 3]: {
          translateX: -section.width / 4,
          opacity: 0,
        },
      })}
    >
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
        className="text-center relative z-20 inline-block"
      >
        <Image src="/logo_blue.png" alt="Teabag Titans Logo" width={64} height={64} className="inline-block" />
      </motion.div>
    </Scroll.Item>
  </Scroll.Section>
);

const Introduction = () => (
  <Scroll.Section className="grid grid-cols-2 gap-16 mb-16">
    <Scroll.Item
      keyframes={({ section }) => ({
        [section.topAt('container-bottom')]: {
          opacity: 0,
          translateX: section.width,
        },
        [section.topAt('container-top') - section.height / 3]: {
          opacity: 1,
          translateX: 0,
        },
      })}
      className="text-right"
    >
      <h1 className="text-4xl font-display text-gold inline-block">Teabag Titans</h1>
    </Scroll.Item>
    <Scroll.Item
      keyframes={({ section }) => ({
        [section.topAt('container-bottom')]: {
          opacity: 0,
          translateX: -section.width,
        },
        [section.topAt('container-top') - section.height / 3]: {
          opacity: 1,
          translateX: 0,
        },
      })}
      className="text-left"
    >
      <div className="max-w-xl">
        <p className="text-lg mb-8">
          Behold, the Teabag Titans—an elite squadron of gaming virtuosos, a force to be reckoned with in the digital
          coliseum. Together, we weave a tapestry of skill, strategy, and camaraderie that sets us apart in the world of
          e-sports.
        </p>
        <p className="text-lg">
          As a united front, the Teabag Titans are more than a team; we're a brotherhood of gamers, warriors of the digital
          frontier, and aficionados of the finest brews. In victory or defeat, we stand together, an indomitable force ready
          to conquer whatever challenges the gaming world throws our way.
        </p>
      </div>
    </Scroll.Item>
    <Scroll.Item
      keyframes={({ section }) => ({
        [section.topAt('container-bottom')]: {
          opacity: 0,
          translateX: -section.width,
        },
        [section.topAt('container-top')]: {
          opacity: 1,
          translateX: section.width / 8,
        },
      })}
      className="col-span-2"
    >
      <Image src={'/home/games.png'} alt={'games'} height={480} width={768} className="inline-block rounded" />
    </Scroll.Item>
  </Scroll.Section>
);

const Members = () => (
  <Scroll.Section className="mb-16">
    <Scroll.Item
      keyframes={({ section }) => ({
        [section.topAt('container-bottom')]: {
          opacity: 0,
          translateY: section.height,
        },
        [section.topAt('container-top') - section.height / 3]: {
          opacity: 1,
          translateY: 0,
        },
      })}
      className="text-center"
    >
      <h1 className="text-4xl font-display inline-block text-gold">Members</h1>
    </Scroll.Item>
    <div className="mt-36 mb-16">
      <PlayerCarousel />
    </div>
    <p className="text-lg max-w-xl mx-auto mb-8"></p>
    <p className="text-lg max-w-xl mx-auto mb-8">
      Between our godlike plays, we do indulge in the nectar of the gaming gods—beer. A lot of it. Our post-game rituals
      involve clinking mugs and toasting to our triumphs, celebrating another day of dominating the digital realm.
    </p>
    <p className="text-lg max-w-xl mx-auto mb-8">
      So, whether you find us in the midst of an epic team fight or raising a glass to our latest conquest, know this: The{' '}
      <span className="text-blue">Teabag Titans</span> are a force to be reckoned with, both in-game and at the bar.{' '}
      <span className="text-gold">Cheers to victory!</span>
    </p>
  </Scroll.Section>
);

const Games = () => (
  <Scroll.Section className="grid grid-cols-2 gap-16 mb-16">
    <Scroll.Item
      keyframes={({ section }) => ({
        [section.topAt('container-bottom')]: {
          opacity: 0,
          translateY: -section.height,
        },
        [section.topAt('container-top') - section.height / 3]: {
          opacity: 1,
          translateY: 0,
        },
      })}
      className="text-center col-span-2"
    >
      <h1 className="text-4xl font-display text-gold inline-block">Triumph</h1>
    </Scroll.Item>
    <Scroll.Item className="text-center col-span-2">
      <p className="text-lg max-w-xl mx-auto">
        In the vast landscape of gaming, we, the Teabag Titans, have triumphed across all categories, forging a legacy that
        resonates with godlike prowess. Our collective skills have propelled us to unparalleled heights, dominating every
        digital arena with a blend of strategy, agility, and unbreakable camaraderie.
      </p>
    </Scroll.Item>
    <Scroll.Item
      keyframes={({ section }) => ({
        [section.topAt('container-bottom')]: {
          opacity: 0,
          translateX: section.width,
        },
        [section.topAt('container-top') - section.height / 3]: {
          opacity: 1,
          translateX: 0,
        },
      })}
      className="text-right"
    >
      <div className="max-w-xl inline-block">
        <h1 className="text-4xl font-display text-blue mb-4">First Person Shooter (FPS)</h1>
        <p className="text-lg mb-8">
          In the heart-pounding world of first-person shooters, the Teabag Titans stand as a testament to absolute skill and
          unrivaled marksmanship. As a team, our proficiency in navigating virtual battlegrounds transcends the ordinary,
          making us a force to be feared and respected.
        </p>
        <p className="text-lg mb-8">
          As a cohesive unit, we move with the synchronicity of a well-oiled machine. Our communication is seamless, our
          strategies are flawless, and our trigger fingers are as quick as thought itself. Each member of the Teabag Titans
          brings a unique set of skills to the table, creating a synergy that elevates our gameplay to the pinnacle of
          excellence.
        </p>
        <p className="text-lg mb-8">
          Whether we're storming the virtual battlefield or engaging in a friendly bout within our team, the Teabag Titans
          showcase an absolute mastery of first-person shooters.
        </p>
      </div>
    </Scroll.Item>
    <Scroll.Item
      keyframes={({ section }) => ({
        [section.topAt('container-bottom')]: {
          opacity: 0,
          translateX: -section.width,
        },
        [section.topAt('container-top') - section.height / 4]: {
          opacity: 1,
          translateX: 0,
        },
      })}
    >
      <Image src={'/home/fps.png'} alt={'fps'} width={512} height={512} className="rounded" />
    </Scroll.Item>
    <Scroll.Item
      keyframes={({ section }) => ({
        [section.topAt('container-bottom') + section.height / 2]: {
          opacity: 0,
          translateX: section.width,
        },
        [section.topAt('container-top')]: {
          opacity: 1,
          translateX: 0,
        },
      })}
      className="text-right"
    >
      <Image src={'/home/rts.png'} alt={'rts'} width={512} height={512} className="inline-block rounded" />
    </Scroll.Item>
    <Scroll.Item
      keyframes={({ section }) => ({
        [section.topAt('container-bottom') + section.height / 2]: {
          opacity: 0,
          translateX: -section.width,
        },
        [section.topAt('container-top')]: {
          opacity: 1,
          translateX: 0,
        },
      })}
    >
      <h1 className="text-4xl font-display text-blue inline-block mb-4">Real Time Strategy (RTS)</h1>
      <p className="text-lg max-w-xl mb-8">
        In the intricate world of real-time strategy games, the Teabag Titans emerge as masters of the digital battlefield.
        Our collective prowess in strategic thinking, resource management, and tactical execution forms the bedrock of our
        dominance in the RTS arena.
      </p>
      <p className="text-lg max-w-xl mb-8">
        Together, our collective skill in real-time strategy games is a symphony of intellect and precision. Our victories
        are not just conquests; they are strategic triumphs etched into the annals of gaming history.
      </p>
      <p className="text-lg max-w-xl mb-8">
        Each decision, each maneuver, is a testament to the Teabag Titans' commitment to excellence in the realm of RTS—a
        commitment that elevates us to the status of strategic virtuosos. As the Titans march across the digital landscape,
        our opponents witness not just a game but a masterclass in strategic finesse. The Teabag Titans, reigning supreme in
        the art of real-time strategy.
      </p>
    </Scroll.Item>
  </Scroll.Section>
);

const Passion = () => (
  <Scroll.Section className="grid grid-cols-2 gap-16 mb-16">
    <Scroll.Item
      keyframes={({ section }) => ({
        [section.topAt('container-bottom')]: {
          opacity: 0,
          translateY: section.height,
        },
        [section.topAt('container-top') - section.height / 2]: {
          opacity: 1,
          translateY: 0,
        },
      })}
      className="col-span-2 text-center"
    >
      <h1 className="text-4xl font-display text-gold inline-block mx-auto">Passion</h1>
    </Scroll.Item>
    <Scroll.Item
      keyframes={({ section }) => ({
        [section.topAt('container-bottom')]: {
          opacity: 0,
          translateY: section.height,
        },
        [section.topAt('container-top') - section.height / 2]: {
          opacity: 1,
          translateY: 0,
        },
      })}
      className="text-right"
    >
      <p className="text-lg max-w-xl inline-block mb-8">
        Beyond the pixelated battlefields and the strategic conquests, there's another arena where the Teabag Titans truly
        excel—the art of savoring a good brew. We, the Titans, are unabashed enthusiasts of beer, and our passion for it is
        as legendary as our gaming skills.
      </p>
      <p className="text-lg max-w-xl inline-block mb-8">
        So, as the pixels settle and the victory screen lights up, the Teabag Titans gather, mugs in hand, to celebrate not
        just the triumphs in the gaming world but the enduring bond fortified by the love of a good beer. In our realm,
        victory is sweet, but a victory accompanied by the clinking of mugs and the laughter of comrades is the true nectar
        of success. Cheers to the Teabag Titans—masters of both the gaming and beer-drinking realms!
      </p>
    </Scroll.Item>
    <Scroll.Item
      keyframes={({ section }) => ({
        [section.topAt('container-bottom')]: {
          opacity: 0,
          translateY: section.height,
        },
        [section.topAt('container-top') - section.height / 2]: {
          opacity: 1,
          translateY: 0,
        },
      })}
    >
      <Image src={'/home/beer.png'} alt={'beer'} width={512} height={512} className="rounded" />
    </Scroll.Item>
  </Scroll.Section>
);

const Footer = () => (
  <>
    <Scroll.Section className="h-[2000px] relative">
      <div className="absolute inset-0 z-0">
        <Image src={'/home/bottom.png'} fill={true} alt={'bottom'} className="object-cover object-top" />
      </div>
      <Scroll.Item
        keyframes={({ section }) => ({
          0: { translateX: section.width / 2 - 140 },
          [section.topAt('container-bottom') + section.height / 2 - 100]: {
            translateY: section.height / 3 + 50,
            opacity: 0,
          },
          [section.topAt('container-bottom') + section.height / 2]: {
            translateY: section.height / 3,
            opacity: 1,
          },
        })}
      >
        <div className="absolute z-0">
          <Image src={'/home/faded_logo.png'} height={280} width={280} alt={'fadedlogo'} />
        </div>
      </Scroll.Item>
    </Scroll.Section>
    <Scroll.Section className="mb-16">
      <div className="mt-16 max-w-4xl mx-auto">
        <Divider />
      </div>
    </Scroll.Section>
  </>
);

export default function Home() {
  return (
    <main>
      <Scroll.Container scrollAxis="y" className="h-screen">
        <Title />
        <Introduction />
        <Members />
        <Games />
        <Passion />
        <Footer />
      </Scroll.Container>
    </main>
  );
}
