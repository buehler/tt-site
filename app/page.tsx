'use client';

import Divider from '@/components/divider';
import PlayerCarousel from '@/components/player_carousel';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Keyframes, Scroll } from 'scrollex';

const keyframes: { [key: string]: Keyframes } = {
  slideFromLeft: ({ section }) => ({
    [section.topAt('container-bottom')]: {
      translateX: -200,
      opacity: 0,
    },
    [section.topAt('container-bottom') + 200]: {
      opacity: 1,
    },
    [(section.topAt('container-top') / 3) * 2]: {
      translateX: 300,
    },
  }),
  slideFromRight: ({ section }) => ({
    [section.topAt('container-bottom')]: {
      translateX: 200,
      opacity: 0,
    },
    [section.topAt('container-bottom') + 200]: {
      opacity: 1,
    },
    [(section.topAt('container-top') / 3) * 2]: {
      translateX: -300,
    },
  }),
};

export default function Home() {
  return (
    <main>
      <Scroll.Container scrollAxis="y" className="h-screen">
        <Scroll.Section className="h-screen relative flex flex-col align-middle justify-center items-center">
          <div className="absolute inset-0 z-0">
            <Image src={'/home/top.png'} fill={true} alt={'top'} objectFit="cover" objectPosition="bottom" />
          </div>
          <Scroll.Item
            keyframes={({ section }) => ({
              0: {
                translateX: 0,
                opacity: 1,
              },
              [section.bottomAt('container-top') / 3]: {
                translateX: 240,
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
              <h2 className="font-display text-xl tracking-widest text-blue">TEABAG</h2>
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
                translateX: -240,
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
        <Scroll.Section className="h-screen grid grid-cols-2">
          <div className="text-left mt-12">
            <Scroll.Item keyframes={keyframes.slideFromLeft}>
              <h1 className="text-4xl font-display text-gold inline-block">Teabag Titans</h1>
            </Scroll.Item>
          </div>
          <div className="mt-12">
            <p className="text-lg mb-8">
              Welcome to the world of the Teabag Titans, an extraordinary e-sports team that combines the thrill of
              competitive gaming with a unique twist. With a name that reflects a bold and unapologetic spirit, Teabag Titans
              brings together a group of talented individuals who are not only passionate about gaming but also share a love
              for the finer things in life, including a good drink.
            </p>
            <p className="text-lg">
              Despite the unconventional approach, Teabag Titans is a force to be reckoned with in the e-sports arena. Our
              members possess exceptional gaming skills, strategic thinking, and an unwavering determination to conquer their
              opponents. We honed our abilities through countless hours of practice and have proven ourselves in various
              gaming tournaments.
            </p>
          </div>
        </Scroll.Section>
        <Scroll.Section className="h-screen">
          <div className="text-right mt-12">
            <Scroll.Item keyframes={keyframes.slideFromRight}>
              <h1 className="text-4xl font-display text-gold">Members</h1>
            </Scroll.Item>
          </div>
          <div className="mt-36">
            <PlayerCarousel />
          </div>
        </Scroll.Section>
        <Scroll.Section className="h-[2000px] relative">
          <div className="absolute inset-0 z-0">
            <Image src={'/home/bottom.png'} fill={true} alt={'bottom'} objectFit="cover" objectPosition="top" />
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
      </Scroll.Container>
    </main>
  );
}
