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
      <div>
        <Image src="/portraits/phear.png" alt="phear" width={400} height={570} className="block" />
        <h3 className="text-center text-2xl font-display mt-2">phear</h3>
      </div>
      <div>
        <Image src="/portraits/crashi.png" alt="crashi" width={400} height={570} className="block" />
        <h3 className="text-center text-2xl font-display mt-2">crashi</h3>
      </div>
      <div>
        <Image src="/portraits/hansa.png" alt="herr hansa" width={400} height={570} className="block" />
        <h3 className="text-center text-2xl font-display mt-2">Herr Hansa</h3>
      </div>
      <div>
        <Image src="/portraits/oeski.png" alt="oeski" width={400} height={570} className="block" />
        <h3 className="text-center text-2xl font-display mt-2">Oeski</h3>
      </div>
      <div>
        <Image src="/portraits/frigo.png" alt="frigoloco" width={400} height={570} className="block" />
        <h3 className="text-center text-2xl font-display mt-2">Frigoloco</h3>
      </div>
      <div>
        <Image src="/portraits/greenhood.png" alt="greenhood" width={400} height={570} className="block" />
        <h3 className="text-center text-2xl font-display mt-2">Greenhood</h3>
      </div>
      <div>
        <Image src="/portraits/kronos.png" alt="kronos" width={400} height={570} className="block" />
        <h3 className="text-center text-2xl font-display mt-2">Kronos</h3>
      </div>
      <ViewportSlot>
        <span className="flicking-arrow-prev is-circle !bg-blue"></span>
        <span className="flicking-arrow-next is-circle !bg-blue"></span>
      </ViewportSlot>
    </Flicking>
  );
}
