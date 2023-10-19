'use client';

import { Arrow, AutoPlay, Perspective } from '@egjs/flicking-plugins';
import '@egjs/flicking-plugins/dist/arrow.css';
import '@egjs/flicking-plugins/dist/flicking-plugins.css';
import Flicking, { ViewportSlot } from '@egjs/react-flicking';
import '@egjs/react-flicking/dist/flicking.css';
import Image from 'next/image';

export default function PlayerCarousel() {
  const plugins = [
    new AutoPlay({
      duration: 3000,
    }),
    new Perspective({ rotate: -1, scale: 2, perspective: 600 }),
    new Arrow(),
  ];

  return (
    <Flicking plugins={plugins} align={'center'} horizontal={true} circular={true} moveType={'snap'}>
      <Image src="/portraits/phear.png" alt="phear" width={400} height={570} />
      <Image src="/portraits/crashi.png" alt="crashi" width={400} height={570} />
      <Image src="/portraits/hansa.png" alt="herr hansa" width={400} height={570} />
      <Image src="/portraits/oeski.png" alt="oeski" width={400} height={570} />
      <Image src="/portraits/frigo.png" alt="frigoloco" width={400} height={570} />
      <Image src="/portraits/greenhood.png" alt="greenhood" width={400} height={570} />
      <Image src="/portraits/kronos.png" alt="kronos" width={400} height={570} />
      <ViewportSlot>
        <span className="flicking-arrow-prev is-circle !bg-blue"></span>
        <span className="flicking-arrow-next is-circle !bg-blue"></span>
      </ViewportSlot>
    </Flicking>
  );
}
