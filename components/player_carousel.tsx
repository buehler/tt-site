'use client';

import Flicking from '@egjs/react-flicking';
import Image from 'next/image';

export default function PlayerCarousel() {
  return (
    <Flicking align="prev" horizontal={true} circular={true}>
      <Image src="/portraits/phear.png" alt="phear" width={400} height={570} />
      <Image src="/portraits/crashi.png" alt="phear" width={400} height={570} />
      <Image src="/portraits/hansa.png" alt="phear" width={400} height={570} />
      <Image src="/portraits/oeski.png" alt="phear" width={400} height={570} />
      <Image src="/portraits/frigo.png" alt="phear" width={400} height={570} />
      <Image src="/portraits/greenhood.png" alt="phear" width={400} height={570} />
      <Image src="/portraits/kronos.png" alt="phear" width={400} height={570} />
    </Flicking>
  );
}
